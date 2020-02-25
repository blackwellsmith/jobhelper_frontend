import { contactsindex } from './contacts.js'
export const updateContactForm = (formData) => {
    
    return {
        type: "UPDATE_CONTACT_FORM",
        formData
    }
} 



export const newcontact = credentials => {
    console.log("wtf", credentials)
    return dispatch => {
        return fetch("http://localhost:3000/contacts", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(r => r.json())
            .then(contact => {
                if (contact.error) {
                    alert(contact.error)
                } else {
                    console.log(credentials)
                    dispatch(contactsindex(credentials)) 
                }
            })
        .catch(console.log)
    }
}