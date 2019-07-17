import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'
import {connect} from 'react-redux'

const CartDropdown = ({cartItems}) => {
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(item => <CartItem key={item.id} item={item}/> )
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapState = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapState)(CartDropdown)
