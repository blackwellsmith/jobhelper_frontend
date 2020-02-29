export const setUserJournal = index => {
    return {
        type: "SET_USER_JOURNAL",
        index
    }
}

export const journalindex = () => {
    return dispatch => {
        return fetch("http://localhost:3000/journalindex", { 
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            
        })
            .then(r => r.json())
            .then(j => {
                if (j.error) {
                    alert(j.error)
                } else {
                    dispatch(setUserJournal(j)) 
                }
            })
        .catch(console.log)
    }
}