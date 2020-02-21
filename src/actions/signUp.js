import { login } from  './currentUser.js'
export const updateSignUp = (formData) => {
    
    return {
        type: "UPDATE_SIGN_UP",
        formData
    }
} 


export const signup = credentials => {
    console.log("wtf", credentials)
    return dispatch => {
        return fetch("http://localhost:3000/signup", {
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
                    console.log(credentials)
                    dispatch(login(credentials)) 
                }
            })
        .catch(console.log)
    }
}