import { journalindex } from './journals.js'
import { jobGoal } from './currentJobGoal.js'
import { clearCurrentJobGoal } from './currentJobGoal.js'
import { contactsindex } from './contacts.js'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user

    }
} 
 
export const login = credentials => {
    console.log("wtf", credentials)
    return dispatch => {
        return fetch("http://localhost:3000/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(r => r.json())
            .then(user => {
                if (user.error) {
                    alert(user.error)
                } else {
                    dispatch(setCurrentUser(user)) 
                    dispatch(journalindex(user))
                    dispatch(jobGoal(user))
                    dispatch(contactsindex())
                }
            })
        .catch(console.log)
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(clearCurrentJobGoal())
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3000/logout', {
            credentials: 'include',
            method:"DELETE"
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
                   dispatch(jobGoal())
        return fetch("http://localhost:3000/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            
        })
            .then(r => r.json())
            .then(user => {
                if (user.error) {
                    alert(user.error)
                } else {
                    dispatch(jobGoal())
                    dispatch(setCurrentUser(user)) 
                    dispatch(journalindex(user))
                    dispatch(contactsindex())
                }
            })
        .catch(console.log)
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}