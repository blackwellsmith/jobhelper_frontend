import React from 'react'
import { connect } from 'react-redux'
import Login from "./Loginform.js"
import Logout from "./Logout.js"


const Navbar = (props) => {
    
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            { props.currentUser ? <h1>Welcome, {props.currentUser.name}</h1> : ""}
            {props.currentUser ? <Logout /> : <Login />}
            </nav>
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }


export default connect(mapStateToProps)(Navbar)

//