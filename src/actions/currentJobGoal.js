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
        console.log("credentials")
        return fetch("http://localhost:3000/jobs", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            
        })
            .then(r => r.json())
            .then(job => {
                if (job.error) {
                    alert(job.error)
                } else {
                    dispatch(setCurrentJobGoal(job)) 
                    console.log(job)
                }
            })
        .catch(console.log)
    }
}