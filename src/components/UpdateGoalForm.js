import React from "react"
import { createJobGoal, updateJobGoal } from '../actions/jobSearchGoal.js'
import { connect } from 'react-redux'

const UpdateGoalForm = ({ createJobGoal ,updateJobGoal,  JobGoalFormData, currentJobGoal}) => {
     
    const handleOnChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        const jobGoal = {
            ...JobGoalFormData,
            [name]: value
        }
        createJobGoal(jobGoal)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        updateJobGoal(JobGoalFormData, currentJobGoal.id) 
    }


    return (
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <div className="form-small">
                <input placeholder="Dream Job: " size="60" className="form-control input-lg"
                value={JobGoalFormData.name} name="name" type='text' onChange={handleOnChange} required />
            </div>
                    
            <div className="form-small">
                <input placeholder="Location: " className="form-control input-lg"
                value={JobGoalFormData.location} name="location" type='text' onChange={handleOnChange} required />
            </div>
                    
            <div className="form-small">
                <input placeholder="Desired Compensation:"
                className="form-control input-lg" value={JobGoalFormData.pay} name="pay" type='text' onChange={handleOnChange} required />
            </div>
                <button id="btn" type="submit" className="btn btn-primary">Update</button>
            </div>
        </form>
            
    )
}
const mapStateToProps = state => {
    return {
        
        JobGoalFormData: state.jobSearchGoal,
        currentJobGoal: state.currentJobGoal
    } 
} 

export default connect(mapStateToProps, { createJobGoal ,updateJobGoal })(UpdateGoalForm)