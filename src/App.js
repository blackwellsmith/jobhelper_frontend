import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarLanding from './components/Navbar.js'
import NavbarLoggedIn from './components/NavbarLoggedIn.js'
import Home from './components/Home.js'
import Job from './components/JobSearchGoalForm.js'
import Login from "./components/Loginform.js"
import Logout from "./components/Logout.js"
import Signup from "./components/Signup.js"
import Journalform from "./components/Journalform.js"
import Journals from "./components/JournalsContainer.js"
import Contacts from "./components/ContactsContainer.js"
import ContactForm from "./components/ContactForm.js"



class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
   
  }

  render() {
    const loggedin = this.props.currentUser
    
    return (

      <>
        <NavbarLanding/>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
        </>
      /*<Router>
        <div className="App">
          
          {loggedin ? (
            <>
            <Logout />
            <h1>Hello {this.props.currentUser.name} </h1>
            <h2>2</h2> 
            <NavbarLoggedIn />
              <Route exact path="/" component={Home} /> 
              <Route exact path="/journal" component={Journalform} />
              <Route exact path="/journals" component={Journals} />
              <Route exact path="/job" component={Job} />
              <Route exact path="/contacts" component={Contacts} />
              <Route exact path="/contact" component={ContactForm} />
              
              
            </>
            
          ) : (
              <>
              <NavbarLanding />
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
            </>
            )}
          
        </div>
      </Router>*/
      
      
    );
  }
}
const mapStateToProps = ( state ) => {
  return {
    currentUser: state.currentUser,
    currentJobGoal: state.currentJobGoal
  }
}


export default connect(mapStateToProps, { getCurrentUser })(App);
