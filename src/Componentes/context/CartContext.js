import { createContext } from "jest-runtime";
import { useState } from "react";

export const CartContext = createContext ()

    export const CartProvider = ({ children }) => {
        const [producto, setProducto] = useState(0)
        console.log(producto)
        return (
            <CartConext.Provider value={setProducto}>
                {children}
            </CartConext.Provider>
        )
    }

