import { addContact } from './contacts.js'
export const updateContactForm = (formData) => {
    
    return {
        type: "UPDATE_CONTACT_FORM",
        formData
    }
} 



export const newcontact = credentials => {
    console.log("b")
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
                console.log('c')
                if (contact.error) {
                    alert(contact.error)
                } else {
                    alert("successfully added contact")
                    dispatch(addContact(contact)) 
                }
            })
        .catch(console.log)
    }
    console.log('d')
}