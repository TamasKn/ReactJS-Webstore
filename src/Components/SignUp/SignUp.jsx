import React from 'react'
import './SignUp.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import {auth, createUser} from '../../Firebase/Firebase.utils'

class SignUp extends React.Component {

    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confPass: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, confPass } = this.state;
    
        if (password !== confPass) {
          console.log("Passwords not matching");
          return;
        }
    
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUser(user, { displayName });
    
          this.setState({
            displayName: '',
            email: '',
            password: '',
            confPass: ''
          });
        } catch (error) {
          console.error(error);
        }
      };
    
      handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };

    render() {

        const { displayName, email, password, confPass } = this.state

        return(
            <div className='sign-up'>
                <h2 className='title'>Not registered yet?</h2>
                <span>Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text' 
                        name='displayName' 
                        value={displayName} 
                        onChange={this.handleChange} 
                        label='Name' 
                        required >
                    </FormInput>

                    <FormInput 
                        type='email' 
                        name='email' 
                        value={email} 
                        onChange={this.handleChange} 
                        label='E-mail' 
                        required >
                    </FormInput>

                    <FormInput 
                        type='password' 
                        name='password' 
                        value={password} 
                        onChange={this.handleChange} 
                        label='Password' 
                        required >
                    </FormInput>

                    <FormInput 
                        type='password' 
                        name='confPass' 
                        value={confPass} 
                        onChange={this.handleChange} 
                        label='Confirm Password' 
                        required >
                    </FormInput>

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp
