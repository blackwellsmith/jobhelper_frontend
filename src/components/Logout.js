import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'

const Logout = ({ logout }) => {
    
    return (
        <form onSubmit={logout}>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Logout</button>
            </div>
        </form>
    )
}


export default connect(null, { logout })(Logout)