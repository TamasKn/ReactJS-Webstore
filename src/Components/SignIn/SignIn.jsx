import React from 'react'
import './SignIn.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../../Components/CustomButton/CustomButton'

class SingIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({email: "", password: ""})
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
                    
                    <CustomButton type='submit' >Sign in</CustomButton>
                </form>

            </div>
        )
    }
}

export default SingIn