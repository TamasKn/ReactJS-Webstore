import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'
import {connect} from 'react-redux'
import { selectCartItems } from '../../Redux/CartReducer/CartSelectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

const CartDropdown = ({cartItems, history}) => {
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length
                    ? cartItems.map(item => <CartItem key={item.id} item={item}/> )
                    : <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => history.push('/checkout')} >GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapState = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapState)(CartDropdown))
