import React from 'react'
import { connect } from 'react-redux'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


const Contacts = ({ contactsIndex }) => {
    
    return (
        <div className="ContactsContainer">
            <h2 style={{ color: 'blue' }}>Your Contacts</h2>
              <ButtonToolbar className="bt">
                {contactsIndex.map(contact => (
                
                  <OverlayTrigger
                  trigger="click"
                  key={contact.id}
                  placement='top'
                  overlay={
                    <Popover id='popover-positioned-top'>
                      <Popover.Title as="h3"><strong>Name: </strong>{contact.name}</Popover.Title>
                      <Popover.Content>
                        <strong>Company: </strong> {contact.company}
                        <strong> - Position: </strong> {contact.position}
                        <strong> - Contact info: </strong> {contact.contact_info}               
                      </Popover.Content>
                    </Popover>
                  }>
                    <Button className='button' variant="primary">Date: {contact.created_at.substring(5, 7)}/{contact.created_at.substring(8, 10)}/{contact.created_at.substring(0, 4)}</Button>
                        
                  </OverlayTrigger>
                    
                    
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