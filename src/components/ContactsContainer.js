import React from 'react'
import { connect } from 'react-redux'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import DeleteContact from './DeleteContact.js'
import Card from 'react-bootstrap/Card'


const Contacts = ({ contactsIndex}) => {
    return (
      <div className="ContactsContainer">
        <div className="badgecontainer">
          <Card body bg="secondary" text="white" border="primary">
            {(contactsIndex === []) ? <Card.Header>Please add contacts in write</Card.Header> : <Card.Header>Contacts</Card.Header>  }
          </Card>
            </div >
              <ButtonToolbar className="bt">
                {contactsIndex.sort((a, b) => a.name.localeCompare(b.name)).map(contact => (
                  <div >
                    <Card key={contact.id} style={{ width: '18rem' }} className="index">
                    <Card.Header>{contact.name}</Card.Header>
                      <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted"><strong>Position: </strong>{contact.position}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><strong>Company: </strong>{contact.company}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><strong>Contact information: </strong>{contact.contact_info}</Card.Subtitle>
                        <DeleteContact contact={contact.id}/>  
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

export default connect(mapStateToProps)(Contacts)