import { create } from 'zustand'

export const useCart = create((set, get)=>({
    cart: [],
    count: () => get().cart.length,
    addToCart: (product, cuantity = 1)=> set((state)=>{
        const index = state.cart.findIndex((p) => p.id === product.id)
        let newState
        if (index !== -1) {
            state.cart[index].cuantity += cuantity
            newState = state.cart
            globalThis.localStorage.setItem("cart", JSON.stringify(newState))
            return { cart: newState }
        }
        newState = [...state.cart, { ...product, cuantity }]
        globalThis.localStorage.setItem("cart", JSON.stringify(newState))
        return { cart: newState }
    })
}))
