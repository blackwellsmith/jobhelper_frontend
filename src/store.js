import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import users from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import signUp from './reducers/signUp.js'
import journalForm from './reducers/journalForm.js'
import journals from './reducers/journals.js'
import contacts from './reducers/contacts.js'
import contactForm from './reducers/contactForm.js'
import jobSearchGoal from './reducers/jobSearchGoal.js'
import currentJobGoal from './reducers/currentJobGoal.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    users: users,
    currentUser,
    loginForm,
    signUp,
    journalForm,
    journals,
    jobSearchGoal,
    currentJobGoal,
    contacts,
    contactForm
})

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store 