import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'

const Logout = ({ logout }) => {
    
    return (
        <form  onClick={logout}>
            <div className="">
                <button id="" type="button" className="btn btn-secondary" align="center">Logout</button>
            </div>
        </form>
    )
}


export default connect(null, { logout })(Logout)