import React from 'react'
import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'
import { createJobGoal, postJobGoal } from '../actions/jobSearchGoal.js' 

const Job = ({ JobGoalFormData, createJobGoal, postJobGoal, currentJobGoal }) => {
    
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
        postJobGoal(JobGoalFormData)
        
      
    }
    return (
    <div className="JobGoal">
            <div className="badgecontainer">
                <Card body bg="secondary" text="white" border="primary">
                    <Card.Header>Dream job</Card.Header> 
                    <Card.Body>
                        <Card.Title>Title: {currentJobGoal.name}</Card.Title>
                        <Card.Title>Location: {currentJobGoal.location}</Card.Title>
                        <Card.Title>Compensation: {currentJobGoal.pay}</Card.Title>
                        <Card.Text>
                               Update your Dream Job below.
                        </Card.Text>
                    </Card.Body>    
                </Card>
           
        </div>
            
        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <div className="form-small">
                    <input placeholder="Job goal description" className="form-control input-lg" value={JobGoalFormData.name} name="name" type='text' onChange={handleOnChange} required/>
                </div>
                    <br></br>
                <div className="form-small">
                    <input placeholder="Location of job: Dallas, Chattanooga, Remote, abroad...." className="form-control input-lg" value={JobGoalFormData.location} name="location" type='text' onChange={handleOnChange} required/>
                    </div>
                    <br></br>
                <div className="form-small">
                    <input placeholder="What is your desired comensation? Recognize your strengths don't sell yourself short..." className="form-control input-lg" value={JobGoalFormData.pay} name="pay" type='text' onChange={handleOnChange} required/>
                </div>
                    <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>   
        </form>
    </div>        
            
    )
}
const mapStateToProps = state => {
    return {
        
        JobGoalFormData: state.jobSearchGoal,
        currentJobGoal: state.currentJobGoal
    } 
} 

export default connect(mapStateToProps, { createJobGoal ,postJobGoal })(Job)