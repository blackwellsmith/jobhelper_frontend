import { login } from  './currentUser.js'
export const updateSignUp = (formData) => {
    
    return {
        type: "UPDATE_SIGN_UP",
        formData
    }
} 


export const signup = credentials => {
    return dispatch => {
        return fetch("https://hurd.herokuapp.com/signup", {
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
                    dispatch(login(credentials)) 
                }
            })
        .catch(console.log)
    }
}