import React from 'react'
import { connect } from 'react-redux'
import Login from "./Loginform.js"
import Logout from "./Logout.js"


const Navbar = (props) => {
    
    return (
        <div>
            { props.currentUser ? <h1>Welcome, {props.currentUser.name}</h1> : <h1>Please log in</h1>}
            { props.currentUser ? <Logout /> : <Login />}
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