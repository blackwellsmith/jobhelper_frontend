import React from 'react'
import { connect } from 'react-redux'
import { createJobGoal } from '../actions/jobSearchGoal.js' 

const Job = ({ JobGoalFormData, createJobGoal, login }) => {
    
    const handleOnChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        console.log(event)
        const jobGoal = {
            ...JobGoalFormData,
            [name]: value
        }
        createJobGoal(jobGoal)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        login(JobGoalFormData)
        
        //loginFormData.reset()
    }
    return (
        <div className="JobGoal">
            <br></br>
        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <div className="form-small">
                    <input placeholder="email" className="form-control input-lg" value={loginFormData.email} name="email" type='text' onChange={handleOnChange} required/>
                </div>
                    <br></br>
                <div className="form-small">
                    <input placeholder="password" className="form-control input-lg" value={loginFormData.password} name="password" type='text' onChange={handleOnChange} required/>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
            </div>   
        </form>
    </div>        
            
    )
}
const mapStateToProps = state => {
    return {
        JobGoalFormData: state.jobSearchGoal
    } 
} 

export default connect(mapStateToProps, { createJobGoal })(Job)