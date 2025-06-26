import {fetcher} from "@/lib/api/fetcher";
import {CartType} from "@/shared/api/hooks/use-cart/use-cart.types";

export async function getCart(): Promise<{ cart: CartType | undefined }> {
    const res = await fetcher("cart");

    if (res.status === 401) return {
        cart: undefined
    };

    const cart = await res.json()

    return {cart};
}