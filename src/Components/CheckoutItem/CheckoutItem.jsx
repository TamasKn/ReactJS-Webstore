import React from 'react'
import './CheckoutItem.scss'
import {connect} from 'react-redux'
import { clearCartItem, addItem, removeItem } from '../../Redux/CartReducer/CartActions'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {

    const {name, price, imageUrl, quantity} = cartItem
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='product' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)} >&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)} >&#10095;</div>
            </span>
            <span className='price'>&pound; {price}</span>
            <span className='remove-button' onClick={() => clearItem(cartItem)} >&#10005;</span>
        </div>
    )
}

const mapDispatch = dispatch => ({
    clearItem: item => dispatch(clearCartItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatch)(CheckoutItem)