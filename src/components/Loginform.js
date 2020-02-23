import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js' 
import { login } from '../actions/currentUser.js'

const Login = ({ loginFormData, updateLoginForm, login }) => {
    
    const handleOnChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        console.log(event)
        const updatedLogin = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedLogin)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        login(loginFormData)
        
        //loginFormData.reset()
    }
    return (
        <div className="Login">
            <br></br>
        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <div className="form">
                    <input placeholder="email" className="form-control input-lg" value={loginFormData.email} name="email" type='text' onChange={handleOnChange} required/>
                </div>
                    <br></br>
                <div className="form">
                    <input placeholder="password" className="form-control input-lg" value={loginFormData.password} name="password" type='text' onChange={handleOnChange} required/>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
            </div>   
        </form>
    </div>        
            
    )
}
const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    } 
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)