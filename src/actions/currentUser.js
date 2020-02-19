export const setCurrent = user => {
    return {
        type: "SET_CURRENT_USER",
        user

    }
}

export const login = credentials => {
    console.log("wtf", credentials)
    return dispatch => {
        return fetch("http://localhost3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
    }
}