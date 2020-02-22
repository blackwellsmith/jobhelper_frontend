import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    
    return (
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink style={{ marginRight: '10px' }} to="/signup">Home</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/login">Login</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/logout">Logout</NavLink>
        </div>
    )
} 




export default Navbar;

