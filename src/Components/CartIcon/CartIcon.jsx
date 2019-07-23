import React from 'react'
import './CartIcon.scss'
import bag_icon from '../../static/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCart} from '../../Redux/CartReducer/CartActions'
import {selectCartItemsCount} from '../../Redux/CartReducer/CartSelectors'
import { createStructuredSelector } from 'reselect'


const CartIcon = ({toggleCart, itemCount}) => {
    return(
        <div className='cart-icon' onClick={toggleCart}>
            <img className='shopping-icon' src={bag_icon} alt='shopping bag' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatch = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

const mapState = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapState, mapDispatch)(CartIcon)