import React from 'react'
import { connect } from 'react-redux'
import { updateSignUp } from '../actions/signUp.js' 
import { signup } from '../actions/signUp.js' 

const Signup = ({ signUpData, updateSignUp, signup }) => {
    
    const handleOnChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        const updatedSignUp = {
            ...signUpData,
            [name]: value
        }
        updateSignUp(updatedSignUp)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        signup(signUpData)
        //login(loginFormData)
        
        //loginFormData.reset()
    }
    return (
        <div className="Signup"> 
      <br></br>      
        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <div className="form-small">
                    <input placeholder="name" className="form-control input-lg" value={signUpData.name} name="name" type='text' onChange={handleOnChange} required/>
                </div>
                    <br></br>
                <div className="form-small">
                    <input placeholder="email" className="form-control input-lg" value={signUpData.email} name="email" type='text' onChange={handleOnChange} required/>
                </div>
                    <br></br>    
                <div className="form-small">
                    <input placeholder="password" className="form-control input-lg" value={signUpData.password} name="password" type='text' onChange={handleOnChange} required/>
                </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
            </div> 
            <br></br>
        </form>
    </div>

    )
        }
const mapStateToProps = state => {
    return {
        signUpData: state.signUp
    } 
}

export default connect(mapStateToProps, { updateSignUp, signup })(Signup)