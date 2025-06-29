"use client"

import {Text} from "@/shared/ui/text/Text";
import styles from "./add-to-cart-button.module.css";
import type {ProductType} from "@/shared/api/hooks/use-products/use-products.types";
import {addProductToCart, removeProductToCart, useCartStore} from "@/lib/stores/cart.store";

export function AddToCartButton({product}: { product: ProductType; }) {
    const {cart} = useCartStore()

    const quantity = cart[product.id]?.quantity;

    const isOpen = !!quantity;

    return (
        <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
            <div className={styles["container-inner"]}>
                <div className="flex h-full">
                    <button
                        onClick={() => removeProductToCart(product)}
                        className="p-[12px] cursor-pointer"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M3 12.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-17a.5.5 0 00-.5.5v1z"
                            />
                        </svg>
                    </button>
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
                    <button onClick={() => addProductToCart(product)} className="p-[12px] cursor-pointer">
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
