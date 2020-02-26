import { jobGoal } from "./currentJobGoal"
export const createJobGoal = (formData) => {
    
    return {
        type: "CREATE_JOB_GOAL",
        formData
    }
}  

 
export const postJobGoal = credentials => {
    console.log("wtf", credentials)
    return dispatch => {
        console.log("you")
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