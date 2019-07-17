import React from 'react'
import './CartIcon.scss'
import bag_icon from '../../static/shopping-bag.svg'

const CartIcon = () => {
    return(
        <div className='cart-icon'>
            <img className='shopping-icon' src={bag_icon} />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon