import React from 'react'
import './SignIn.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../../Components/CustomButton/CustomButton'
import {auth, signInWithGoogle} from '../../Firebase/Firebase.utils'

class SingIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: "", password: ""})
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = event => {
        // A single function handles all the input changes
        const {value, name} = event.target
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>Already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        type='email' 
                        name='email'
                        label='email' 
                        value={this.state.email} 
                        required 
                        handleChange={this.handleChange} />
                    <FormInput 
                        type='password' 
                        name='password'
                        label='password'
                        value={this.state.password} 
                        required 
                        handleChange={this.handleChange} />
                    <div className='buttons'>
                    <CustomButton type='submit' >Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSign >Sign in with Google</CustomButton>
                    </div>
                    
                </form>

            </div>
        )
    }
}

export default SingIn