import React from 'react'
import { connect } from 'react-redux'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


const Journals = ({ journalIndex }) => {
    
    return (
        <div className="JournalsContainer">
            <h1>Your Journal Entries</h1>
              <ButtonToolbar className="bt">
                {journalIndex.map(journal => (
                
                  <OverlayTrigger
                  trigger="click"
                  key='bottom'
                  placement='bottom'
                  overlay={
                    <Popover id='popover-positioned-bottom'>
                      <Popover.Title as="h3"><stron>Notes:</stron>{journal.entry}</Popover.Title>
                      <Popover.Content>
                        <strong>People you connected with: </strong> {journal.meetups}
                        <strong> - Skills improvement: </strong> {journal.study}
                        <strong> - Jobs applied for: </strong> {journal.applications}
                        <strong> - Goals set: </strong> {journal.goals}                   
                      </Popover.Content>
                    </Popover>
                  }>
                    <Button className='button' variant="primary">{journal.created_at}</Button>
                        
                  </OverlayTrigger>
                    
                    
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