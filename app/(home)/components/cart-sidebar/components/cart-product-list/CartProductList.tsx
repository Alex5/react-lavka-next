"use client"

import styles from "@home/components/cart-sidebar/cart-sidebar.module.css";
import {CartProduct} from "@home/components/cart-sidebar/components/cart-product/cart-product";
import {useCart} from "@/shared/api/hooks/use-cart/use-cart";

export function CartProductList() {
    const {cart} = useCart();

    const cartItems = Object.values(cart ?? {});

    return (
        <ul className={styles["cart-sidebar-list"]}>
            {cartItems?.map((cartItem) => (
                <CartProduct key={cartItem.product.id} cartItem={cartItem}/>
            ))}
        </ul>
    )
}