import React from 'react'
import { connect } from 'react-redux'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Popover from 'react-bootstrap/Popover'
import PopoverContent from 'react-bootstrap/PopoverContent'


const Journals = ({ journalIndex }) => {
    
    return (
        <div className="JournalsContainer">
            <ul>
              {journalIndex.map(journal => (
                <OverlayTrigger
                trigger="click"
                key={bottom}
                placement={bottom}
                overlay={
                    <Popover id={popover-positioned-bottom}>
                    <Popover.Title as="h3"><stron>Notes:</stron>{journal.entry}</Popover.Title>
                    <Popover.Content>
                        <strong>People you connected with:</strong> {journal.meetups}
                        <strong>Skills improvement:</strong> {journal.study}
                        <strong>Jobs applied for:</strong> {journal.applications}
                        <strong>Goals set:</strong> {journal.goals}                   
                    </Popover.Content>
                  </Popover>
                }
              >
                <Button variant="secondary">Popover on {placement}</Button>
              </OverlayTrigger>
              ))}
            </ul>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        journalIndex: state.journals
    } 
}

export default connect(mapStateToProps)(Journals)