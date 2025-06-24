import { useCart } from "@shared/api/hooks/use-cart/use-cart";
import { calculateTotal } from "@shared/services/amount.service";
import { Div } from "@shared/ui/div/div";
import { Text } from "@shared/ui/text/Text";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { CartProductCard } from "./components/cart-product-card/cart-product-card";
import { Button } from "@shared/ui/button/button";

export function CartPage() {
  const { cart } = useCart();

  const cartItems = Object.values(cart ?? {});

  const total = calculateTotal(cart);

  return (
    <Div gap4 flex flexCol style={{ maxWidth: "960px", margin: "0 auto" }}>
      <Link to="/">
        <Div flex gap1>
          <ArrowLeft />
          <Text>Вернуться в каталог</Text>
        </Div>
      </Link>
      <Text fontSize="lg">Корзина</Text>
      <Div flex gap2>
        <Div flex flexCol gap2 style={{ width: "100%" }}>
          {cartItems.map((cartItem) => (
            <CartProductCard key={cartItem.product.id} cartItem={cartItem} />
          ))}
        </Div>
        <Div flex flexCol style={{ width: "328px" }} gap2>
          <Text>Итого</Text>
          <Text>К оплате: {total}</Text>
          <a href={import.meta.env.VITE_API_URL + "/api/v1/yandex"}>
            <Button colorPallete="yellow" radius="lg">
              Перейти к оплате
            </Button>
          </a>
        </Div>
      </Div>
    </Div>
  );
}
