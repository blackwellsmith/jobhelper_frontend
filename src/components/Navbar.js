import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';




const NavbarLanding = () => { 
     return(
         <div>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Navbar.Brand href="/">Heard</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="/login">Login</Nav.Link>
               <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
               <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
        
               </NavDropdown>
               </Nav>
               
               </Navbar.Collapse>
             </Navbar>
             </div>
             )
           
        
    }




export default NavbarLanding;

