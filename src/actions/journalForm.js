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
            .then(user => {
                if (user.error) {
                    alert(user.error)
                } else {
                    console.log(credentials)
                    dispatch(console.log(credentials)) 
                }
            })
        .catch(console.log)
    }
}