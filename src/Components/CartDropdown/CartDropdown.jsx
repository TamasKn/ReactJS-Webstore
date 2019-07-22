import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'
import {connect} from 'react-redux'
import { selectCartItems } from '../../Redux/CartReducer/CartSelectors'

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

const mapState = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapState)(CartDropdown)
