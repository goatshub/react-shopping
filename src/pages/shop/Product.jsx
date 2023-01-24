import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

export const Product = (props) => {
    const {productImage, productName, price, id } = props.data
    const {cartItems, addToCart, removeFromCart } = useContext(ShopContext)
    const amount = cartItems[id]
    return (
        <div className='product'>
            <img src={productImage} alt="product" />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>
            <div className="buttonDiv">
                <button onClick={()=> addToCart(id)} className="toCartBtn">+</button>
                <p className='toCartAmount'>{amount}</p>
                <button 
                    onClick={()=> removeFromCart(id)} 
                    className="toCartBtn"
                    disabled={amount<=0}
                >-</button>
            </div>
        </div>
    )
}
