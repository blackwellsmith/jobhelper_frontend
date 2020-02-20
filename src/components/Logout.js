import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'

const Logout = ({ logout }) => {
    
    return (
        <form onClick={logout}>
            <div className="form-group">
                <button type="button" className="btn btn-primary">Logout</button>
            </div>
        </form>
    )
}


export default connect(null, { logout })(Logout)