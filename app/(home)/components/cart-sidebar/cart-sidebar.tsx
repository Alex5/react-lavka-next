import {Text} from "@/shared/ui/text/Text";
import styles from "./cart-sidebar.module.css";
import {Div} from "@/shared/ui/div/div";
import {CartProductList} from "@home/components/cart-sidebar/components/cart-product-list/CartProductList";
import {CheckoutCartButton} from "@home/components/cart-sidebar/components/cart-action-button/checkout-cart-button";

export function CartSidebar() {
    return (
        <aside style={{width: "320px"}} className={styles["cart-sidebar"]}>
            <Div flex flexCol gap1>
                <Text
                    fontSize="title4"
                    fontWeight="bold"
                >
                    15–25 мин, 0–119 ₽
                </Text>
                <Text fontSize="caption1" fontColor="minor">
                    Ещё 932₽, и будет 99₽
                </Text>
            </Div>
            <CartProductList />
            <CheckoutCartButton/>
        </aside>
    );
}
