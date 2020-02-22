import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
    
    return (
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink style={{ marginRight: '10px' }} to="/signup">Sign up</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/login">Login</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/logout">Logout</NavLink>
        </div>
    )
} 

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }


export default connect(mapStateToProps)(Navbar)

//<NavLink style={{ marginRight: '10px' }} to="/">Logout</NavLink>