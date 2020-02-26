import { journalindex } from './journals.js'
export const updateJournalForm = (formData) => {
    
    return {
        type: "UPDATE_JOURNAL_FORM",
        formData
    }
} 



export const journalentry = credentials => {
    console.log("wtf", credentials)
    return dispatch => {
        return fetch("http://localhost:3000/journalentry", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(r => r.json())
            .then(entry => {
                if (entry.error) {
                    alert(entry.error)
                } else {
                    dispatch(journalindex()) 
                }
            })
        .catch(console.log)
    }
}