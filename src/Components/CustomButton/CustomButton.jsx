import React from 'react'
import './CustomButton.scss'

const CustomButton = ({children, isGoogleSign, inverted, ...otherProps}) => {
    return(
        
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSign ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
        
    )
}

export default CustomButton