/* eslint-disable no-unreachable */
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")

export function CartProvider({ children }) {
    const [cart, setCart] = useState(cartFromLocalStorage)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    const addToCart = (tour, fecha, pax) => {
        const tourInCartIndex = cart.findIndex(item => item.id === tour.id);
        if (tourInCartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[tourInCartIndex].quantity += 1;
            return setCart(newCart);
        }
        setCart(prevState => ([
            ...prevState,
            {
                ...tour,
                quantity: 1,
                fecha,
                pax
            }
        ]));
    }
    const removeFromeCart = tour => {
        console.log('324');
        setCart(prevState => prevState.filter(item => item.id != tour.id))
    }
    const clearCart = () => {
        console.log('eliminar');
        setCart([])
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromeCart }}>
            {children}
        </CartContext.Provider>
    )
}