export const setCurrentJobGoal = goal => {
    console.log("in set goal")
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
        return fetch("http://localhost:3000/jobs", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            
        })
            .then(r => r.json())
            .then(job => {
                if (job === null) {
                    //console.log(job)
                    return null
                    
                    //debugger
                    //alert(job.error)
                } else {
                    //console.log(job)
                    dispatch(setCurrentJobGoal(job)) 
                    
                }
            })
        .catch(console.log)
    }
}