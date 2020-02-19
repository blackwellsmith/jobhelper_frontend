import React from 'react'
import { connect } from 'react-redux'


const Login = (props) => {
    return (
        <form onSubmit={undefined}>
            <input placeholder="email" value={props.email} email="email" type='text' onChange={undefined} />
            <input placeholder="password" value={props.password} password="password" type='text' onChange={undefined} />
            <input type="submit" value="Log in" />
        </form>
    )
}
const mapStateToProps = state => {
    return {
        email: state.loginForm.email,
        password: state.loginForm.password
    }
}
const dispatchStateToProps = () => {
    
}

export default connect(mapStateToProps, dispatchStateToProps)(Login)