import {proxy} from "valtio/vanilla";
import {CartType} from "@/shared/api/hooks/use-cart/use-cart.types";
import {ProductType} from "@/shared/api/hooks/use-products/use-products.types";
import {useSnapshot} from "valtio/react";

export const cartStore = proxy<{ cart: CartType }>({cart: {}});

export function addProductToCart(product: ProductType) {
    cartStore.cart = {
        ...cartStore.cart,
        [product.id]: {
            product,
            quantity: (cartStore.cart[product.id]?.quantity ?? 0) + 1
        }
    }
}

export function removeProductToCart(product: ProductType) {
    const existedCartItem = cartStore.cart[product.id];

    if (existedCartItem.quantity === 1) {
        delete cartStore.cart[product.id];
    } else {
        cartStore.cart = {
            ...cartStore.cart,
            [product.id]: {
                product,
                quantity: existedCartItem.quantity - 1
            }
        }
    }
}

export function useCartStore() {
    return useSnapshot(cartStore)
}