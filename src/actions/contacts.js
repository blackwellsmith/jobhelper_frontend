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
    console.log("in delete", contact)
    return {
        type: "DELETE_CONTACT",
        contact
    }
}

export function deleteUserContact(id) {
    console.log("in the delete fetch", id)
    return dispatch => { dispatch(deleteContact(id))
        return fetch(`http://localhost:3000/contacts/${id}`, {
            method: "DELETE",
        })
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
