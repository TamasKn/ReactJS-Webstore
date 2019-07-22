import React from 'react'
import './CartIcon.scss'
import bag_icon from '../../static/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCart} from '../../Redux/CartReducer/CartActions'

const CartIcon = ({toggleCart, itemCount}) => {
    return(
        <div className='cart-icon' onClick={toggleCart}>
            <img className='shopping-icon' src={bag_icon} />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatch = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

const mapState = ({ cart: { cartItems }}) => ({
    itemCount: cartItems.reduce((accQty, item) => accQty + item.quantity, 0)
})

export default connect(mapState, mapDispatch)(CartIcon)