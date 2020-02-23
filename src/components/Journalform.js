import React from 'react'
import { connect } from 'react-redux'
import { updateJournalForm, journalentry } from '../actions/journalForm.js'

const JournalForm = ({ journalFormData, updateJournalForm, journalentry }) => {
    
    const handleOnChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        console.log(event.target)
        const updatedJournalForm = {
            ...journalFormData,
            [name]: value
        }
        updateJournalForm(updatedJournalForm)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        journalentry(journalFormData)
        //login(loginFormData)
        
        //loginFormData.reset() 
    }
    return (
        
        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <div className="col-xs-4">
                    <input placeholder="notes" className="form-control input-lg" value={journalFormData.entry} name="entry" type='text' onChange={handleOnChange} required/>
                </div>
                <div className="col-xs-4">
                    <input placeholder="who did you meet" className="form-control input-lg" value={journalFormData.meetups} name="meetups" type='text' onChange={handleOnChange} required/>
                </div>
                <div className="col-xs-4">
                    <input placeholder="how did you improve" className="form-control input-lg" value={journalFormData.study} name="study" type='text' onChange={handleOnChange} required/>
                </div>
                <div className="col-xs-4">
                    <input placeholder="jobs apllied" className="form-control input-lg" value={journalFormData.applications} name="applications" type='text' onChange={handleOnChange} required/>
                </div>
                <div className="col-xs-4">
                    <input placeholder="what are your goals" className="form-control input-lg" value={journalFormData.goals} name="goals" type='text' onChange={handleOnChange} required/>
                </div>
                <button type="submit" className="btn btn-primary">Make Entry</button>
            </div> 
            <br></br>
        </form>
    )
}
const mapStateToProps = state => {
    return {
        journalFormData: state.journalForm
    } 
}

export default connect(mapStateToProps, { updateJournalForm, journalentry })(JournalForm)
