export const setUserContacts = index => {
    return {
        type: "SET_USER_CONTACTS",
        index
    }
}

export const addContact = contact => {
    console.log(contact)
    return {
        type: "ADD_CONTACT",
        contact
    }
}

export const deleteUserContact = (id) => {
    return () => {
           
        return fetch(`http://localhost:3000/contacts/${id}`, {
            credentials: 'include',
            method:"DELETE"
        })
        //dispatch(contactsindex())
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
                    
                    dispatch(setUserContacts(contacts)) 
                }
            })
        .catch(console.log)
    }
}
