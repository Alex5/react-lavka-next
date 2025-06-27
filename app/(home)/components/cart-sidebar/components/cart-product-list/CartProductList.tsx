import styles from "@home/components/cart-sidebar/cart-sidebar.module.css";
import {CartProduct} from "@home/components/cart-sidebar/components/cart-product/cart-product";
import {getCart} from "@/lib/api/cart";

export async function CartProductList() {
    const {cart} = await getCart();

    const cartItems = Object.values(cart ?? {});

    return (
        <ul className={styles["cart-sidebar-list"]}>
            {cartItems?.map((cartItem) => (
                <CartProduct key={cartItem.product.id} cartItem={cartItem}/>
            ))}
        </ul>
    )
}