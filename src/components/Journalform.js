import React from 'react'
import { connect } from 'react-redux'
import { updateJournalForm, journalentry } from '../actions/journalForm.js'

const JournalForm = ({ journalFormData, updateJournalForm, journalentry }) => {
    
    const handleOnChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        const updatedJournalForm = {
            ...journalFormData,
            [name]: value
        }
        updateJournalForm(updatedJournalForm)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        journalentry(journalFormData)
        
    }
    return (
        <div className="JournalForm"> 
            <br></br>
        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <div className="form">
                    <input placeholder="How was today?" className="form-control input-lg" value={journalFormData.entry} name="entry" type='text' onChange={handleOnChange} required/>
                    </div>
                    
                <div className="form">
                    <input placeholder="Who did you meet or have coffee with?" className="form-control input-lg" value={journalFormData.meetups} name="meetups" type='text' onChange={handleOnChange} required/>
                    </div>
                    
                <div className="form">
                    <input placeholder="How did you improve your professional skills?" className="form-control input-lg" value={journalFormData.study} name="study" type='text' onChange={handleOnChange} required/>
                    </div>
                    
                <div className="form">
                    <input placeholder="What jobs did you apply For?" className="form-control input-lg" value={journalFormData.applications} name="applications" type='text' onChange={handleOnChange} required/>
                    </div>
                    
                <div className="form">
                    <input placeholder="What are your goals for tomorrow?" className="form-control input-lg" value={journalFormData.goals} name="goals" type='text' onChange={handleOnChange} required/>
                    </div>
                    
                <button id="btn" type="submit" className="btn btn-primary">Make Entry</button>
            </div> 
            <br></br>
        </form>
    </div>
    )
}
const mapStateToProps = state => {
    return {
        journalFormData: state.journalForm
    } 
}

export default connect(mapStateToProps, { updateJournalForm, journalentry })(JournalForm)
