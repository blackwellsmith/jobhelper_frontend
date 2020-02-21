import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import Navbar from './components/Navbar.js'
import MainContainer from './components/MainContainer.js'
import Signup from './components/Signup.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Signup />
        
          
      </div> 
    );
  }
}



export default connect(null, { getCurrentUser })(App);
