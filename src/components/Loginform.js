import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js' 


const Login = ({ loginForm, updateLoginForm }) => {
    
    const handleOnChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        const updatedLogin = {
            name,
            value
        }
        updateLoginForm(updatedLogin)
    }
    return (
        <form onSubmit={undefined}>
            <input placeholder="email" value={loginForm.email} name="email" type='text' onChange={handleOnChange} />
            <input placeholder="password" value={loginForm.password} name="password" type='text' onChange={handleOnChange} />
            <input type="submit" value="Log in" />
        </form>
    )
}
const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm })(Login)