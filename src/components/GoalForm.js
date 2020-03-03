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
                    <input placeholder="Job goal description" className="form-control input-lg"
                        value={JobGoalFormData.name} name="name" type='text' onChange={handleOnChange} required />
                        </div>
                    
                        <div className="form-small">
                    <input placeholder="Location of job: Dallas, Chattanooga, Remote, abroad...." className="form-control input-lg"
                        value={JobGoalFormData.location} name="location" type='text' onChange={handleOnChange} required />
                        </div>
                    
                        <div className="form-small">
                    <input placeholder="What is your desired compensation? Recognize your strengths don't sell yourself short..."
                        className="form-control input-lg" value={JobGoalFormData.pay} name="pay" type='text' onChange={handleOnChange} required />
                        </div>
                            <button type="submit" className="btn btn-primary">Create</button>
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

export default connect(mapStateToProps, { createJobGoal ,postJobGoal })(GoalForm)