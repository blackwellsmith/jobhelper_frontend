import React from 'react'
import { connect } from 'react-redux'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DeleteContact from './DeleteContact.js'
import Card from 'react-bootstrap/Card'


class Contacts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    sorted : "sortByName"
    }
  }
  
  handleOnChange = (event) => {
       console.dir(event.target.value)
    this.setState({
      sorted : event.target.value
       })
  }
  render() {
    
    return (
      <div className="ContactsContainer">
        <div className="badgecontainer">
          <Card body bg="secondary" text="white" border="primary">
            {(this.props.contactsIndex === []) ? <Card.Header>You haven't added any contacts yet. Please add contacts in write.</Card.Header> : <Card.Header>Contacts</Card.Header>}
            <Card.Text></Card.Text>
            <Card.Text>
              <DropdownButton  variant="secondary" id="dropdown-item-button" title="Sorter">
              <Dropdown.Item onClick={this.handleOnChange} value="sortByName" as="button">Sort By Name</Dropdown.Item>
              <Dropdown.Item onClick={this.handleOnChange} value="sortByCompany" as="button">Sort By Company</Dropdown.Item>
              </DropdownButton>
            </Card.Text>
          </Card>
        </div >
        <ButtonToolbar className="bt">
          { (this.state.sorted === "sortByName") ? ([...this.props.contactsIndex].sort((a, b) => a.name.localeCompare(b.name)).map(contact => (
            <div >
              <Card key={contact.id} style={{ width: '18rem' }} className="index">
                <Card.Header>{contact.name}</Card.Header>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted"><strong>Position: </strong>{contact.position}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted"><strong>Company: </strong>{contact.company}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted"><strong>Contact information: </strong>{contact.contact_info}</Card.Subtitle>
                  <DeleteContact contact={contact.id} />
                </Card.Body>
              </Card>

            </div>
          ))) :  ([...this.props.contactsIndex].sort((a, b) => a.company.localeCompare(b.company)).map(contact => (
            <div >
              <Card key={contact.id} style={{ width: '18rem' }} className="index">
                <Card.Header>{contact.company}</Card.Header>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted"><strong>Name: </strong>{contact.name}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted"><strong>Position: </strong>{contact.position}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted"><strong>Contact information: </strong>{contact.contact_info}</Card.Subtitle>
                  <DeleteContact contact={contact.id} />
                </Card.Body>
              </Card>

            </div>
          )))
            }
            
        </ButtonToolbar>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        contactsIndex: state.contacts
    } 
}

export default connect(mapStateToProps)(Contacts)