import { useCart } from "@/shared/api/hooks/use-cart/use-cart";
import { fetcher } from "@/shared/api/fetcher";
import type { ProductType } from "../use-products/use-products.types";
import type { CartType } from "./use-cart.types";

export function useCartActions() {
  const { cart, mutate } = useCart();

  async function handleAddProductToCart(product: ProductType) {
    const cartItem = {
      product,
      quantity: (cart?.[product.id]?.quantity ?? 0) + 1,
    };

    function addProduct(product: ProductType) {
      return fetcher<CartType>("cart", {
        method: "POST",
        body: JSON.stringify(product),
        credentials: "include",
      });
    }

    const optimisticData = { ...cart, [product.id]: cartItem };

    try {
      await mutate({
        fetcher: () => addProduct(product),
        options: {
          optimisticData,
          rollbackOnError: true,
          populateCache: true,
          revalidate: false,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleRemoveProductFromCart(product: ProductType) {
    const cartItem = cart?.[product.id];

    const newCart = { ...cart };

    if (cartItem) {
      if (cartItem.quantity === 1) {
        delete newCart[cartItem.product.id];
      } else {
        newCart[cartItem.product.id] = {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      }
    }

    function removeProduct(product: ProductType) {
      return fetcher<CartType>(`cart/${product.id}`, {
        method: "DELETE",
        body: JSON.stringify(product),
        credentials: "include",
      });
    }

    try {
      await mutate({
        fetcher: () => removeProduct(product),
        options: {
          optimisticData: newCart,
          rollbackOnError: false,
          populateCache: true,
          revalidate: false,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return {
    addToCart: handleAddProductToCart,
    removeFromCart: handleRemoveProductFromCart,
  };
}
