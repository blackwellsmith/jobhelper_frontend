import React from 'react'
import { connect } from 'react-redux'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Badge from 'react-bootstrap/Badge'

const Journals = ({ journalIndex }) => {
    
    return (
        <div className="JournalsContainer">
          <div className="badgecontainer">
            <Badge variant="secondary"><h3>Journal</h3></Badge>
              </div>
              <ButtonToolbar className="bt">
                {journalIndex.map(journal => (
                
                  <OverlayTrigger
                  trigger="click"
                  key={journal.id}
                  placement='top'
                  overlay={
                    <Popover id='popover-positioned-top'>
                      <Popover.Title as="h3"><strong>Notes: </strong>{journal.entry}</Popover.Title>
                      <Popover.Content>
                        <strong>People you connected with: </strong> {journal.meetups}
                        <strong> - Skills improvement: </strong> {journal.study}
                        <strong> - Jobs applied for: </strong> {journal.applications}
                        <strong> - Goals set: </strong> {journal.goals}                   
                      </Popover.Content>
                    </Popover>
                  }>
                    <Button className='button' variant="primary">Date: {journal.created_at.substring(5, 7)}/{journal.created_at.substring(8, 10)}/{journal.created_at.substring(0, 4)}</Button>
                        
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