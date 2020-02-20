import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/currentUser.js'

const Logout = ({ logout }) => {
    
    

    const handleOnSubmit = event => {
        event.preventDefault()
        login(loginFormData)
    }
    return (
        <form onSubmit={handleOnSubmit}>
            
        <input type="submit" value="Logout" />
        </form>
    )
}


export default connect(null, { logout })(Logout)