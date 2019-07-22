import React from 'react'
import './CheckoutItem.scss'

const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}}) => {
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='product' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>&pound; {price}</span>
            <span className='remove-button'>&#10005;</span>
        </div>
    )
}

export default CheckoutItem