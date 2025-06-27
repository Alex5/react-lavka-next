import {CartProductCard} from "@/app/cart/components/cart-product-card/cart-product-card";
import {Text} from "@/shared/ui/text/Text";
import Link from "next/link";
import {APP_CONFIG} from "@/lavka.config";
import {Button} from "@/shared/ui/button/button";
import {Div} from "@/shared/ui/div/div";
import {calculateTotal} from "@/shared/services/amount.service";
import {getCart} from "@/lib/api/cart";

export async function CartProductList() {
    const {cart} = await getCart()

    const cartItems = Object.values(cart ?? {});

    const total = calculateTotal(cart)

    return (
        <div className="flex gap-2">
            <div className="flex flex-col w-full gap-2">
                {cartItems.map((cartItem) => (
                    <CartProductCard key={cartItem.product.id} cartItem={cartItem} />
                ))}
            </div>
            <Div flex flexCol style={{ width: "328px" }} gap2>
                <Text>Итого</Text>
                <Text>К оплате: {total}</Text>
                <Link href={APP_CONFIG.API_URL + "/api/v1/yandex"}>
                    <Button colorPallete="yellow" radius="lg">
                        Перейти к оплате
                    </Button>
                </Link>
            </Div>
        </div>

    )
}