import { Div } from "@/shared/ui/div/div";
import { Text } from "@/shared/ui/text/Text";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {CartProductList} from './components/cart-product-list/cart-product-list'

export default function CartPage() {
  return (
    <Div gap4 flex flexCol style={{ maxWidth: "960px", margin: "0 auto" }}>
      <Link href="/">
        <Div flex gap1>
          <ArrowLeft />
          <Text>Вернуться в каталог</Text>
        </Div>
      </Link>
      <Text fontSize="lg">Корзина</Text>
      <CartProductList/>
    </Div>
  );
}
