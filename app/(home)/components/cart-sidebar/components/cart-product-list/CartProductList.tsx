"use client"

import styles from "@home/components/cart-sidebar/cart-sidebar.module.css";
import {CartProduct} from "@home/components/cart-sidebar/components/cart-product/cart-product";
import Image from "next/image";
import {Text} from "@/shared/ui/text/Text";
import {useCartContext} from "@/lib/providers/cart-context-provider";

export function CartProductList() {
    const {cart} = useCartContext();

    const cartItems = Object.values(cart ?? {});

    if (cartItems.length === 0) {
        return (
            <div
                style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 20,
                    alignItems: "center",
                    flex: 1
                }}
            >
                <Image
                    src="https://yastatic.net/s3/lavka-web/public/assets/images/CategoryUnavailable@2x.png"
                    alt="category-unavailable"
                    sizes="200px"
                    height={100}
                    width={290}
                />
                <Text>
                    В корзине пока ничего нет. <br/>
                    Самое время наполнять её!
                </Text>
            </div>
        )
    }

    return (
        <ul className={styles["cart-sidebar-list"]}>
            {cartItems?.map((cartItem) => (
                <CartProduct key={cartItem.product.id} cartItem={cartItem}/>
            ))}
        </ul>
    )
}