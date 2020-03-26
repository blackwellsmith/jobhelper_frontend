import React from "react"
import { createJobGoal, postJobGoal } from '../actions/jobSearchGoal.js'
import { connect } from 'react-redux'

const GoalForm = ({ createJobGoal ,postJobGoal,  JobGoalFormData}, props) => {
     
    const handleOnChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        const jobGoal = {
            ...JobGoalFormData,
            [name]: value
        }
        createJobGoal(jobGoal)
    }

    const handleOnSubmit = () => {
        postJobGoal(JobGoalFormData,) 
    }


    return (
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
                        <div className="form-small">
                    <input placeholder="Dream Job:" className="form-control input-lg"
                        value={JobGoalFormData.name} name="name" type='text' onChange={handleOnChange} required />
                        </div>
                    
                    <div className="form-small">
                        <input placeholder="Location:" className="form-control input-lg"
                        value={JobGoalFormData.location} name="location" type='text' onChange={handleOnChange} required />
                    </div>
                    
                    <div className="form-small">
                        <input placeholder="Desired Compensation:"
                        className="form-control input-lg" value={JobGoalFormData.pay} name="pay" type='text' onChange={handleOnChange} required />
                    </div>
                <button id="btn" type="submit" className="btn btn-primary">Create</button>
          </div>
          <br></br>
        </form>
            
    )
}
const mapStateToProps = state => {
    return {
        
        JobGoalFormData: state.jobSearchGoal,
        currentJobGoal: state.currentJobGoal
    } 
} 

export default connect(mapStateToProps, { createJobGoal ,postJobGoal })(GoalForm)