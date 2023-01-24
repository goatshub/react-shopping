import React, { useContext } from 'react'
import './cart.css'
import { ShopContext } from '../../context/ShopContext'
import { PRODUCTS } from '../../products'
import { CartItem } from './CartItem'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const navigate = useNavigate()
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalCartAmount = getTotalCartAmount()
  const totalCartAmountStr = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
  }).format(totalCartAmount);
  return (
    <div className='cart'>
      <div className="cartTitle">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product, index) => {
          if(cartItems[product.id]){
            return <CartItem key={index} data={product}  />
          }
        })}
      </div>
      <div className="checkOut">
        <p className='subtotal'>Subtotal: {totalCartAmountStr}</p>
        <div className="buttonDiv">
          <button className='toCartBtnSmall' onClick={() => navigate('/')}>Continue Shopping</button>
          { totalCartAmount > 0 && <button className='toCartBtnSmall'>Checkout</button> }
        </div>
      </div>
    </div>
  )
}
