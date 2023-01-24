import React from 'react'
import './shop.css'
import { PRODUCTS } from '../../products'
import { Product } from './Product'

export const Shop = () => {
  return (
    <div className='shop'>
        <div className="shoptitle">
            <h1>Goat Shop</h1>
        </div>
        <div className="products">
            {
                PRODUCTS.map((product, key) => 
                    <Product key={key}
                        data={product}
                    />
                )
            }
        </div>

    </div>
  )
}
