"use client"

import { Text } from "@/shared/ui/text/Text";
import { Div } from "@/shared/ui/div/div";
import type { CartItem } from "@/shared/api/hooks/use-cart/use-cart.types";

import {getImageUrl} from "@/shared/services/dom.service";
import Link from "next/link";
import Image from "next/image";
import {useCartActions} from "@/shared/api/hooks/use-cart/use-cart-actions";
import {ProductQuantitySelector} from "@/shared/ui/product-quantity-select/product-quantity-select";

type CartProductProps = {
  cartItem: CartItem;
};

export function CartProduct(props: CartProductProps) {
  const {
    cartItem: { product, quantity },
  } = props;

  const { id, longTitle, snippetImage, currentPriceSigned } = product;

  const { addToCart, removeFromCart } = useCartActions();

  const src = getImageUrl(snippetImage.url, 100)

  return (
    <Div flex gap1 itemsCenter width-full>
      <Link href={`/cart/${id}`} style={{ all: "inherit" }}>
        <Image
          src={src}
          className="radius-md aspect-square"
          sizes="60px"
          alt={props.cartItem.product.longTitle}
          height={60}
          width={60}
        />
        <Div flex flexCol width-full style={{ gap: 4 }}>
          <Text fontSize="sm" fontWeight="light" lineClamp2>
            {longTitle}
          </Text>
          <Text fontSize="sm" fontWeight="medium">
            {currentPriceSigned}
          </Text>
        </Div>
      </Link>

      <ProductQuantitySelector quantity={quantity}>
        <ProductQuantitySelector.Decrement
          onDecrement={() => removeFromCart(product)}
        />
        <ProductQuantitySelector.Quantity />
        <ProductQuantitySelector.Increment
          onIncrement={() => addToCart(product)}
        />
      </ProductQuantitySelector>
    </Div>
  );
}
