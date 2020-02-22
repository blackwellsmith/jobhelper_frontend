import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js'
import MainContainer from './components/MainContainer.js'
import Login from "./components/Loginform.js"
import Logout from "./components/Logout.js"
import Signup from "./components/Signup.js"

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} /> 
        </div>
      </Router>
      
    );
  }
}



export default connect(null, { getCurrentUser })(App);
