"use client"

import {Text} from "@/shared/ui/text/Text";
import {ButtonLink} from "@/shared/ui/button-link/button-link";
import {calculateTotal} from "@/shared/services/amount.service";
import {useCartStore} from "@/lib/stores/cart.store";

export function CheckoutCartButton() {
    const {cart} = useCartStore();

    const total = calculateTotal(cart);

    return (
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
    )
}