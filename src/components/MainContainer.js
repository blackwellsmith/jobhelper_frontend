import { connect } from 'react-redux'
import Login from "./Loginform.js"
import Logout from "./Logout.js"
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const MainContainer = (props) => {
    const [show, setShow] = useState(false);

    return (
            <div className="MainContainer">
                <Alert show={show} >
                  <Alert.Heading>logged in, logged out</Alert.Heading>
                  <p>
                     You are in charge of your own success. No one can do it for you. Staying organized is one of many things you must do. 
                  </p>
                  { props.currentUser ? <h1>Welcome, {props.currentUser.name}</h1> : <h1>Please log in</h1>}
                  { props.currentUser ? <Logout /> : <Login />}
                  <hr />
                  <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="primary">
                      Close me when your done ya'll!
                    </Button>
                  </div>
                </Alert>

               
                {!show && <Button onClick={() => setShow(true)}>login logout</Button>}
            </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }


export default connect(mapStateToProps)(MainContainer)
///export default MainContainer