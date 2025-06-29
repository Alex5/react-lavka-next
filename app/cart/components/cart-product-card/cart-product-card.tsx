"use client"

import type { CartItem } from "@/shared/api/hooks/use-cart/use-cart.types";
import { Div } from "@/shared/ui/div/div";
import Image from "next/image";
import { Text } from "@/shared/ui/text/Text";
import {getImageUrl} from "@/shared/services/dom.service";
import {ProductQuantitySelector} from "@/shared/ui/product-quantity-select/product-quantity-select";
import {addProductToCart} from "@/lib/stores/cart.store";

export function CartProductCard({ cartItem }: { cartItem: CartItem }) {
  const { product, quantity } = cartItem;

  const src = getImageUrl(product.snippetImage.url, 300)

  return (
    <Div key={product.id} flex gap2>
      <Image
        src={src}
        className="aspect-square radius-lg p-2"
        sizes="120px"
        width={120}
        height={120}
        alt={cartItem.product.longTitle}
      />
      <Text fontWeight="normal" fontSize="md" style={{ flex: 1 }}>
        {product.longTitle}
      </Text>
      <ProductQuantitySelector quantity={quantity}>
        <ProductQuantitySelector.Decrement />
        <ProductQuantitySelector.Quantity />
        <ProductQuantitySelector.Increment
          onIncrement={() => addProductToCart(product)}
        />
      </ProductQuantitySelector>
    </Div>
  );
}
