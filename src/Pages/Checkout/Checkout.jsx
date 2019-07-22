import React from 'react'
import './Checkout.scss'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../Redux/CartReducer/CartSelectors'

const Checkout = ({cartItems, total}) => {
    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {/* {cartItems.map(item => (
                <CheckoutItem key={item.id} cartItem={item} />
            ))} */}
            <div className='total'>TOTAL: ${total}</div>

        </div>
    )
}

const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapState)(Checkout)