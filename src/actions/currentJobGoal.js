export const setCurrentJobGoal = goal => {
    console.log(goal)
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

export const jobGoal = () => {
    return dispatch => {
        return fetch("https://hurd.herokuapp.com/jobs", {
            //credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            
        })
            .then(r => r.json())
            .then(job => {
                if (job === null) {
                     return null
                } else {
                    console.log(job)
                    debugger
                     dispatch(setCurrentJobGoal(job)) 
                }
            })
        .catch(console.log)
    }
}