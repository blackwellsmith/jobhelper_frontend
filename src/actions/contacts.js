export const setUserContacts = index => {
    return {
        type: "SET_USER_CONTACTS",
        index
    }
}

export const contactsindex = () => {
    
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
                    console.log(j)
                    dispatch(setUserJournal(j)) 
                }
            })
        .catch(console.log)
    }
}