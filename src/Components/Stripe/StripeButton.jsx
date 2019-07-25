import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import logo from '../../static/dogday_logo.png'

const StripeButton = ({ price }) => {

    const priceConvert = price * 100
    const pub_key = 'pk_test_rLcibzhZ9NDXJ2T4V3IUjUh600jZRG4qU4'

    const onToken = token => {
        console.log('Payment successful')
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Webstore'
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is \u00A3 ${price}` }
            amount={priceConvert}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={pub_key}
        />

        
    )
}

export default StripeButton