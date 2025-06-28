import {createContext, ReactNode, useContext, useState} from "react";
import {CartType} from "@/shared/api/hooks/use-cart/use-cart.types";
import {ProductType} from "@/shared/api/hooks/use-products/use-products.types";

type CartContextWithSetter = { cart: CartType } & {addProductToCart: (product: ProductType) => void} | null

const CartContext = createContext<CartContextWithSetter>(null);

export function CartContextProvider({children, initialCart}: {children: ReactNode; initialCart?: CartType}) {
    const [cart, setter] = useState<CartType>(initialCart ?? {});

    function addProductToCart(product: ProductType) {
        const newCart = {...cart};

        const existedCartItem = cart[product.id];

        if (existedCartItem) {
            newCart[product.id] = {product, quantity: existedCartItem.quantity + 1}
        } else {
            newCart[product.id] = {product, quantity: 1}
        }

        setter(newCart);
    }

    return (
        <CartContext.Provider value={{cart, addProductToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    const context = useContext(CartContext);

    if (!context) throw new Error('useAppContext must be used within a ContextProvider');

    return context;
}