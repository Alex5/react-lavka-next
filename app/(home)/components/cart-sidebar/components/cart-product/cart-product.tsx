import { Text } from "@/shared/ui/text/Text";
import type { CartItem } from "@/shared/api/hooks/use-cart/use-cart.types";

import {getImageUrl} from "@/shared/services/dom.service";
import Link from "next/link";
import Image from "next/image";
import {ProductQuantitySelector} from "@/shared/ui/product-quantity-select/product-quantity-select";
import {memo, useCallback} from "react";
import {ProductType} from "@/shared/api/hooks/use-products/use-products.types";

type CartProductProps = {
  cartItem: CartItem;
  addProductToCart: (product: ProductType) => null
};

export const CartProduct = memo<CartProductProps>((props) => {
  const {
    cartItem: { product, quantity },
      addProductToCart
  } = props;

  const callbackAddProductToCart = useCallback(addProductToCart, [addProductToCart])

  // const {addProductToCart} = useCartContext()

  const { id, longTitle, snippetImage, currentPriceSigned } = product;

  const src = getImageUrl(snippetImage.url, 100)

  return (
    <div className="flex">
      <Link href={`/cart/${id}`} className="flex gap-2 flex-1 items-center">
        <div className="relative bg-neutral-50 rounded-2xl w-full h-12 max-w-12 box-border">
          <Image
              src={src}
              className="radius-md aspect-square"
              sizes="60px"
              alt={props.cartItem.product.longTitle}
              fill
          />
        </div>
        <div className="flex flex-col">
          <Text fontSize="sm" fontWeight="light" lineClamp2>
            {longTitle}
          </Text>
          <Text fontSize="sm" fontWeight="medium">
            {currentPriceSigned}
          </Text>
        </div>
      </Link>
      <ProductQuantitySelector quantity={quantity}>
        <ProductQuantitySelector.Decrement/>
        <ProductQuantitySelector.Quantity />
        <ProductQuantitySelector.Increment
          onIncrement={() => callbackAddProductToCart(product)}
        />
      </ProductQuantitySelector>
    </div>
  );
}, (prevProps, newProps) => prevProps.cartItem.quantity !== newProps.cartItem.quantity)

CartProduct.displayName = "CartProduct";
