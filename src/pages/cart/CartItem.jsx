import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data
    const {cartItems, addToCart, removeFromCart, updateCartItemsCount} = useContext(ShopContext)

    const amount = cartItems[id]
    const itemTotal = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
      }).format(price * amount );
  return (
    <div className='CartItem'>
        <div className="cartImg">
            <img src={productImage} alt="product"  />
        </div>
        <div className="cartInfo">
            <h3>{productName}</h3>
            
            
            <div className="amountDiv">
                <p>Amount:</p>
                <div className="buttonDiv">
                    <button 
                        onClick={()=> addToCart(id)} 
                        className="toCartBtnSmall"
                    >+</button>
                    <input 
                        type='number' 
                        onChange={(e)=>{updateCartItemsCount(Number(e.target.value), id)}} 
                        value={amount}
                        min="0"
                    />
                    <button 
                        onClick={()=> removeFromCart(id)} 
                        className="toCartBtnSmall"
                        disabled={amount<=0}
                    >-</button>
                </div>
            </div>
            <p className='cartItemTotal'>Total: {itemTotal }</p>
        </div>
    </div>
  )
}
