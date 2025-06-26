import {fetcher} from "@/lib/api/fetcher";
import {CartType} from "@/shared/api/hooks/use-cart/use-cart.types";
import {headers as nextHeaders} from "next/dist/server/request/headers";

export async function getCart(): Promise<{ cart: CartType | undefined }> {
    const headers = await nextHeaders();

    const res = await fetcher("cart", {headers});

    if (res.status === 401) return {
        cart: undefined
    };

    const cart = await res.json()

    return {cart};
}