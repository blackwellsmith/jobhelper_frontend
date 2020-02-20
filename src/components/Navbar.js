import React from 'react'
import { connect } from 'react-redux'
import Login from "./Loginform.js"
import Logout from "./Logout.js"


const Navbar = (props) => {
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Heard</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                   <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        

                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">{ props.currentUser ? <h1>Welcome, {props.currentUser.name}</h1> : <h1>Please log in</h1>}</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">{ props.currentUser ? <Logout /> : <Login />}</NavDropdown.Item>
                    </NavDropdown>

                
                    </Nav>
                </Navbar.Collapse>
            </Navbar>        
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