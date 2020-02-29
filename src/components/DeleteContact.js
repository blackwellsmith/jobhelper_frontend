import React from 'react';
import { connect } from 'react-redux'
import { deleteUserContact } from '../actions/contacts.js'
const DeleteContact = ({deleteUserContact, contact}) =>  {
    
        const handleClick = (contact) => {
            console.log(contact)
            deleteUserContact(contact)
            //deleteContact(contact)
        }
    
        return (
            
                <div>
                <button onClick={() => handleClick( `${contact}` ) }  className="btn btn-secondary" align="center">Remove contact</button>
                </div>
            
        )
}  
    

export default connect(null,  { deleteUserContact })(DeleteContact)