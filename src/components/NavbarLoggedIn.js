import React from 'react'
import { connect } from 'react-redux'
import { Nav, Navbar, NavDropdown, Form } from 'react-bootstrap';
import Logout from "./Logout.js"



const NavbarLoggedIn = (props) => {

    
    
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Navbar.Brand href="/">Heard</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="/journals">Daily Journal</Nav.Link>
               <Nav.Link href="/contacts">Contacts</Nav.Link>        
               <NavDropdown title="Write" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/journal">Journal Entry</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Add Contacts</NavDropdown.Item>
                <NavDropdown.Item href="/job">Desired Position</NavDropdown.Item>
                        </NavDropdown>
                        <Navbar.Text>
                           <div> Signed in as: {props.currentUser.name}   </div>
                    </Navbar.Text>       
               </Nav>
                    <Nav>
                    
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
} 

const mapStateToProps = ( state ) => {
    return {
      currentUser: state.currentUser,
      currentJobGoal: state.currentJobGoal
    }
  }

export default connect(mapStateToProps)(NavbarLoggedIn);
