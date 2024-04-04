/* eslint-disable no-unreachable */
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")

export function CartProvider({ children }) {
    const [cart, setCart] = useState(cartFromLocalStorage)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    const addToCart = tour => {
        const tourInCartIndex = cart.findIndex(item => item.id === tour.id)
        if (tourInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[tourInCartIndex].quantity += 1
            return setCart(newCart)
        }
        setCart(prevState => ([
            ...prevState,
            {
                ...tour,
                quantity: 1
            }
        ]))
    }
    const removeFromeCart = tour => {
        setCart(prevState => prevState.filter(item => item.id != tour.id))
    }
    const clearCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromeCart }}>
            {children}
        </CartContext.Provider>
    )
}