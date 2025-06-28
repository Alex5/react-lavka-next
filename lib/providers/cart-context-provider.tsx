import {ReactNode, useState} from "react";
import {CartType} from "@/shared/api/hooks/use-cart/use-cart.types";
import {ProductType} from "@/shared/api/hooks/use-products/use-products.types";
import {createContext, useContextSelector} from "use-context-selector";

type CartContextWithSetter = { cart: CartType; addProductToCart: (product: ProductType) => void}

const CartContext = createContext<CartContextWithSetter>({
    cart: {},
    addProductToCart: () => null
});

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
    const cart = useContextSelector(CartContext, s => s.cart);
    const addProductToCart = useContextSelector(CartContext, s => s.addProductToCart);

    if (!cart) throw new Error('useAppContext must be used within a ContextProvider');

    return {cart, addProductToCart};
}