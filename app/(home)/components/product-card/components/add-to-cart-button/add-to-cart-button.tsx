"use client"

import { Button } from "@/shared/ui/button/button";
import { Text } from "@/shared/ui/text/Text";
import styles from "./add-to-cart-button.module.css";
import type { ProductType } from "@/shared/api/hooks/use-products/use-products.types";
import {CartType} from "@/shared/api/hooks/use-cart/use-cart.types";
import {useCartContext} from "@/lib/providers/cart-context-provider";

export function AddToCartButton({ product }: { product: ProductType; cart?: CartType }) {
    const {cart, addProductToCart} = useCartContext();

    async function addToCard() {

    }

  const { quantity } = cart?.[product.id] ?? {};

  const isOpen = !!quantity;

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <div className={styles["container-inner"]}>
        <div style={{ display: "flex", height: "100%" }}>
            <Button
                radius="xl"
                shadow="none"
                colorPallete="gray"
                style={{
                    height: "inherit",
                    padding: "12px",
                    backgroundColor: "transparent",
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M3 12.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-17a.5.5 0 00-.5.5v1z"
                    />
                </svg>
            </Button>
          <div
            style={{
              height: "100%",
              width: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text fontWeight="medium">{quantity ?? 0}</Text>
          </div>
            <button onClick={() => addProductToCart(product)} className="p-[12px]">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M11.5 3a.5.5 0 00-.5.5V11H3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H11v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V13h7.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H13V3.5a.5.5 0 00-.5-.5h-1z"
                    />
                </svg>
            </button>
        </div>
      </div>
    </div>
  );
}
