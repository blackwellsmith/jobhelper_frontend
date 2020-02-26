import React from 'react';
import { Nav, Navbar, NavDropdown, Form } from 'react-bootstrap';
import styled from 'styled-components';
import Logout from "./Logout.js"


// const Styles = styled.div`
//    .navbar {
//        background-color: #222;
//    }

//    .navbar-brand, .navbar-nav, .nav-link{
//         color: #bbb;

//         &:hover {
//             color: white;
//         }
//    }
//    `

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
                     <Nav>
                         <Form inline>
                             <Logout />
                             </Form>
    </Nav>
  </Navbar.Collapse>
             </Navbar>
             </div>
             )
           /* <Navbar expand="lg">
                <Navbar.Brand href="/">Heard</Navbar.Brand>
                <Navbar.toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.link href="/">Home</Nav.link></Nav.Item>
                        <Nav.Item><Nav.link href="/login">Login</Nav.link></Nav.Item>
                        <Nav.Item><Nav.link href="/signup">Signup</Nav.link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </div> 
     
           /*  <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}> 
           <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
           <NavLink style={{ marginRight: '10px' }} to="/login">Login</NavLink>
           <NavLink style={{ marginRight: '10px' }} to="/signup">Signup</NavLink>
       </div> *} */
        
    }




        export default NavbarLanding;

