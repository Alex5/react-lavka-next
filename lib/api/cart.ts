import {fetcher} from "@/lib/api/fetcher";
import {CartType} from "@/shared/api/hooks/use-cart/use-cart.types";
import {ProductType} from "@/shared/api/hooks/use-products/use-products.types";
import {revalidateTag} from "next/cache";

export async function getCart(): Promise<{ cart: CartType | undefined }> {
    const res = await fetcher("cart", {
        next: {
            tags: ['cart']
        }
    });

    if (res.status === 401) return {
        cart: undefined
    };

    const cart = await res.json()

    return {cart};
}

export async function addProductToCart(product: ProductType): Promise<{ cart: CartType | null }> {
    const response = await fetcher("cart", {
        method: "POST",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" },
    })

    if (response.status === 401) {
        return {cart: null}
    }

    const cart = await response.json();

    revalidateTag("cart")

    return {cart}
}