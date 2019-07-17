import React from 'react'
import './CartIcon.scss'
import bag_icon from '../../static/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCart} from '../../Redux/CartReducer/CartActions'

const CartIcon = ({toggleCart}) => {
    return(
        <div className='cart-icon' onClick={toggleCart}>
            <img className='shopping-icon' src={bag_icon} />
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatch = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

export default connect(null, mapDispatch)(CartIcon)