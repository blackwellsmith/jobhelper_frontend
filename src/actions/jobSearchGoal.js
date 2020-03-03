import { jobGoal, setCurrentJobGoal } from "./currentJobGoal"
export const createJobGoal = (formData) => {
    
    return {
        type: "CREATE_JOB_GOAL",
        formData
    }
}  
 
 
export const postJobGoal = credentials => {
    return dispatch => {
        console.log(credentials)
        debugger
        dispatch(setCurrentJobGoal(credentials))
        return fetch("http://localhost:3000/jobs", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(r => r.json())
            .then(job => {
                if (job.error) {
                    alert(job.error)
                } else {
                    dispatch(jobGoal(job))
                }
            })
        .catch(console.log)
    }
}

export const updateJobGoal = (credentials, jobId) => {
    console.log("updating that shit")
    return dispatch => {
        return fetch(`http://localhost:3000/jobs/${jobId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(r => r.json())
            .then(job => {
                if (job.error) {
                    alert(job.error)
                } else {
                    dispatch(setCurrentJobGoal(job))
                    console.log("updating that shit")
                }
            })
        .catch(console.log)
    }
}