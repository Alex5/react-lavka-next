import type { CartType } from "@/shared/api/hooks/use-cart/use-cart.types";

export function calculateTotal(cart?: CartType) {
  return Object.values(cart ?? {})?.reduce(
    (acc, prev) => (acc += prev.product.currentPrice * prev.quantity),
    0
  );
}
