import React from 'react'
import './SignForms.scss'
import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'

const SignForms = () => {
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignForms
