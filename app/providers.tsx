'use client';

import {ReactNode} from "react";
// import {AppContextProvider} from "@/lib/providers/app-context-provider";
import {CartContextProvider} from "@/lib/providers/cart-context-provider";

export function Providers({ children }: {children: ReactNode}) {
    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    );
}