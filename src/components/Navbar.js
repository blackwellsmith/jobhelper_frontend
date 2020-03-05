import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';




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
               <Nav.Link href="/signup">Signup</Nav.Link>
               </Nav>
               </Navbar.Collapse>
             </Navbar>
             </div>
             )
           
        
    }




export default NavbarLanding;

