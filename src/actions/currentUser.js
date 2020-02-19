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
                }
            })
        .catch(console.log)
    }
}