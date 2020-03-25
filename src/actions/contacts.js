export const setUserContacts = index => {
    return {
        type: "SET_USER_CONTACTS",
        index
    }
}

export const addContact = contact => {
    return {
        type: "ADD_CONTACT",
        contact
    }
}

export const deleteContact = contact => {
    
    return {
        type: "DELETE_CONTACT",
        contact
    }
}

export function deleteUserContact(id) {
    
    return dispatch => { dispatch(deleteContact(id))
        return fetch(`https://hurd.herokuapp.com/contacts/${id}`, {
            method: "DELETE",
        })
      }
           
    }


export const contactsindex = () => {
    
    return dispatch => {
        return fetch("https://hurd.herokuapp.com/contacts", {
            //credentials: "include",
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
