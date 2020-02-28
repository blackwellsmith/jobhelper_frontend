import React from 'react'
import { connect } from 'react-redux'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Card from 'react-bootstrap/Card'

const Journals = ({ journalIndex }) => {
    
    return (
        <div className="JournalsContainer">
          <div className="badgecontainer">
            <Card body bg="secondary" text="white" border="primary">
               {(journalIndex === []) ? <Card.Header>You have no journal entries left</Card.Header> : <Card.Header>Journal</Card.Header>  }
            </Card>
              </div>
              <ButtonToolbar className="bt">
                {journalIndex.map(journal => (
                   
                   <Card className="index" style={{ width: '18rem' }} border="primary">
                     <Card.Header>Date: {journal.created_at.substring(5, 7)}/{journal.created_at.substring(8, 10)}/{journal.created_at.substring(0, 4)}</Card.Header>
                     <Card.Body>
                       <Card.Subtitle className="mb-2 text-muted"><strong>Notes: </strong>{journal.entry}</Card.Subtitle>
                       <Card.Subtitle className="mb-2 text-muted"><strong>Meetups: </strong>{journal.meetups}</Card.Subtitle>
                       <Card.Subtitle className="mb-2 text-muted"><strong>Professional improvement: </strong>{journal.study}</Card.Subtitle>
                       <Card.Subtitle className="mb-2 text-muted"><strong>Application submissions: </strong>{journal.applications}</Card.Subtitle>
                       <Card.Subtitle className="mb-2 text-muted"><strong>Tomorrows goals: </strong>{journal.goals}</Card.Subtitle>
                     </Card.Body>
                   </Card>
                ))}
            
              </ButtonToolbar> 
              </div>
    )
}

const mapStateToProps = state => {
    return {
        journalIndex: state.journals
    } 
}

export default connect(mapStateToProps)(Journals)