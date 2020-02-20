import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js' 
import { login } from '../actions/currentUser.js'

const Login = ({ loginFormData, updateLoginForm, login }) => {
    
    const handleOnChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        const updatedLogin = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedLogin)
    }

    const handleOnSubmit = () => {
       
        login(loginFormData) 
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <div class="form-group">
                <div class="col-xs-4">
                    <input placeholder="email" class="form-control input-lg" value={loginFormData.email} name="email" type='text' onChange={handleOnChange} />
                </div>
                <div class="col-xs-4">
                    <input placeholder="password" class="form-control input-lg" value={loginFormData.password} name="password" type='text' onChange={handleOnChange} />
                </div>
                <button type="submit" class="btn btn-primary">Log in</button>
            </div>   
        </form>
    )
}
const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)