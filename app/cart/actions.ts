'use server'

import { revalidatePath } from 'next/cache'

export async function addToCart(productId: string) {
    await fetch(`http://localhost:3000/api/v1/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: productId }),
    })

    revalidatePath('/cart') // если надо пересчитать
}
