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

    const handleOnSubmit = event => {
        event.preventDefault()
        login(loginFormData)
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <input placeholder="email" value={loginFormData.email} name="email" type='text' onChange={handleOnChange} />
            <input placeholder="password" value={loginFormData.password} name="password" type='text' onChange={handleOnChange} />
            <input type="submit" value="Log in" />
        </form>
    )
}
const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)