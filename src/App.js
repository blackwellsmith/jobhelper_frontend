import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js'
import NavbarLoggedIn from './components/NavbarLoggedIn.js'
import Home from './components/Home.js'
import Login from "./components/Loginform.js"
import Logout from "./components/Logout.js"
import Signup from "./components/Signup.js"
import Journalform from "./components/Journalform.js"
import Journals from "./components/JournalsContainer.js"
import Job from "./components/JobSearchGoalForm.js"

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const loggedin = this.props.currentUser
    return (
      <Router>
        <div className="App">
          
          {loggedin ? (
            <>
            <h1>Heard</h1>
            <NavbarLoggedIn />
              <Route exact path="/" component={Home} />
              <Route exact path="/logout" component={Logout} /> 
              <Route exact path="/journal" component={Journalform} />
              <Route exact path="/journals" component={Journals} />
              <div><Job /></div>
            </>
            
          ) : (
              <>
            <h1>Heard</h1>
            <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
            </>
            )}
          
        </div>
      </Router>
      
      
    );
  }
}
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}


export default connect(mapStateToProps, { getCurrentUser })(App);
