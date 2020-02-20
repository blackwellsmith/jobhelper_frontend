import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import Navbar from './components/Navbar.js'
import MainContainer from './components/MainContainer.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <MainContainer />
      </div> 
    );
  }
}



export default connect(null, { getCurrentUser })(App);
