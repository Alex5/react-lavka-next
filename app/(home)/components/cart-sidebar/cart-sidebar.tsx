import {Text} from "@/shared/ui/text/Text";
import styles from "./cart-sidebar.module.css";;
import {CartProduct} from "./components/cart-product/cart-product";
import {calculateTotal} from "@/shared/services/amount.service";
import {ButtonLink} from "@/shared/ui/button-link/button-link";
import {Div} from "@/shared/ui/div/div";
import {CartType} from "@/shared/api/hooks/use-cart/use-cart.types";
import Image from "next/image";

export function CartSidebar() {
    // @todo add server cart
    const {cart} = {cart: {} as CartType};

    const cartItems = Object.values(cart ?? {});

    const total = calculateTotal(cart);

    return (
        <aside className={styles["cart-sidebar"]}>
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
            {cartItems.length === 0 ? (
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
            ) : (
                <ul className={styles["cart-sidebar-list"]}>
                    {cartItems?.map((cartItem) => (
                        <CartProduct key={cartItem.product.id} cartItem={cartItem}/>
                    ))}
                </ul>
            )}
            <ButtonLink
                href="/cart"
                radius="lg"
                colorPallete={total ? "yellow" : "gray"}
                disabled={!total}
                size="lg"
                width-full
            >
                <Text fontWeight="medium">
                    {total
                        ? "В корзину · " +
                        new Intl.NumberFormat("ru-RU", {
                            currency: "RUB",
                            style: "currency",
                        }).format(total)
                        : "Добавьте что-нибудь"}
                </Text>
            </ButtonLink>
        </aside>
    );
}
