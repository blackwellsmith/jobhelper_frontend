import React from 'react'
import { connect } from 'react-redux'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Card from 'react-bootstrap/Card'
import { deleteUserContact } from '../actions/contacts.js'


const Contacts = ({ contactsIndex,  deleteUserContact}) => {


  const handleClick = id => {
    //event.preventDefault()
    console.log(id)
    deleteUserContact(id)
  }


    
    return (
      <div className="ContactsContainer">
        <div className="badgecontainer">
          <Card body bg="secondary" text="white" border="primary">
            {(contactsIndex === []) ? <Card.Header>Please add contacts in write</Card.Header> : <Card.Header>Contacts</Card.Header>  }
          </Card>
          
            </div>
              <ButtonToolbar className="bt">
                {contactsIndex.sort((a, b) => a.name.localeCompare(b.name)).map(contact => (
                  <div>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title>{contact.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Position: {contact.position}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Company: {contact.company}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Contact information: {contact.contact_info}</Card.Subtitle>
                        <Button onClick={handleClick(contact.id)} key={contact.id} variant="secondary">Delete</Button>
                        </Card.Body>
                      </Card>

                  </div>
             ))}
            
            </ButtonToolbar> 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        contactsIndex: state.contacts
    } 
}

export default connect(mapStateToProps,{deleteUserContact} )(Contacts)