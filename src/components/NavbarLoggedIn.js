import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';


const NavbarLoggedIn = () => {
    
    return (
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink style={{ marginRight: '10px' }} to="/signup">Home</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/logout">Logout</NavLink>
        </div>
    )
} 



export default NavbarLoggedIn;
