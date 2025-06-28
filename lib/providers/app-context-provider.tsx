import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {CartType} from "@/shared/api/hooks/use-cart/use-cart.types";

type AppContextType = {
    cart: CartType;
}

type AppContextWithSetter = AppContextType & {setter: Dispatch<SetStateAction<AppContextType>>} | null

const initialContext: AppContextType = {
    cart: {
    },
}

const AppContext = createContext<AppContextWithSetter>(null);

export function AppContextProvider({children}: {children: ReactNode}) {
    const [value, setter] = useState<AppContextType>(initialContext);

    return (
        <AppContext.Provider value={{...value, setter}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(AppContext);

    if (!context) throw new Error('useAppContext must be used within a ContextProvider');

    return context;
}