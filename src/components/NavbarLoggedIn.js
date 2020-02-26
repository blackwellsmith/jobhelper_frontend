import React from 'react'
import { NavLink } from 'react-router-dom';


const NavbarLoggedIn = () => {

    
    
    return (
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink style={{ marginRight: '10px' }} to="/">About </NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/journal"> Make Journal Entry </NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/journals"> Daily Journals </NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/job"> Job Goal </NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/contacts"> Contacts </NavLink>  
        <NavLink style={{ marginRight: '10px' }} to="/contact"> Add Contact </NavLink>  
        </div>
    )
} 



export default NavbarLoggedIn;
