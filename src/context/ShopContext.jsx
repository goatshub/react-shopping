import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < PRODUCTS.length ; i++){
        cart[PRODUCTS[i].id] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const addToCart = (itemId) => {
        setCartItems(prev =>({...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeFromCart = (itemId) => {
        setCartItems(prev =>({...prev, [itemId]: prev[itemId] - 1 }))
    }
    const updateCartItemsCount = ( newAmount, itemId) => {
        setCartItems(prev =>({...prev, [itemId]: newAmount }))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const itemId in cartItems){
            if(cartItems[itemId] > 0){
                let itemInfo = PRODUCTS.find(product => product.id === Number(itemId))
                totalAmount += itemInfo.price * cartItems[itemId]
            }
        }
        return totalAmount
    }
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemsCount, getTotalCartAmount}
    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}
