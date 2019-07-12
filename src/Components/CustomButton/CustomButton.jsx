import React from 'react'
import './CustomButton.scss'

const CustomButton = ({children, isGoogleSign, ...otherProps}) => {
    return(
        
        <button className={`${isGoogleSign ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
        
    )
}

export default CustomButton