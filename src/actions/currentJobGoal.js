export const setCurrentJobGoal = goal => {
    return {
        type: "SET_CURRENT_JOB_GOAL",
        goal
    }
}

export const clearCurrentJobGoal = () => {
    return {
        type: "CLEAR_CURRENT_JOB_GOAL"
    }
}

export const jobGoal = credentials => {
    console.log("wtf", credentials)
    return dispatch => {
        return fetch("http://localhost:3000/jobs", {
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
                    dispatch(setCurrentJobGoal(user)) 
                    
                }
            })
        .catch(console.log)
    }
}