export const setUserContacts = index => {
    return {
        type: "SET_USER_CONTACTS",
        index
    }
}

export const contactsindex = () => {
    
    return dispatch => {
        return fetch("http://localhost:3000/contacts", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            
        })
            .then(r => r.json())
            .then(contacts => {
                if (contacts.error) {
                    alert(contacts.error)
                } else {
                    console.log(contacts)
                    dispatch(setUserConntacts(contacts)) 
                }
            })
        .catch(console.log)
    }
}