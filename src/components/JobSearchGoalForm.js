import React from 'react'
import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'
import { createJobGoal, postJobGoal, updateJobGoal } from '../actions/jobSearchGoal.js' 

const Job = ({ JobGoalFormData, createJobGoal, postJobGoal, currentJobGoal, updateJobGoal }) => {
    
    const handleOnChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        
        const jobGoal = {
            ...JobGoalFormData,
            [name]: value
        }
        createJobGoal(jobGoal)
    }

    const handleOnSubmit = event => {
        //event.preventDefault()
        (currentJobGoal === []) ? postJobGoal(JobGoalFormData)  :  updateJobGoal(JobGoalFormData, currentJobGoal.id)
        
        
      
    }
    return (
        <div className="JobGoal">
            {(currentJobGoal === []) ? (
            <div className="badgecontainer">
                <Card body bg="secondary" text="white" border="primary">
                    <Card.Header>Dream job</Card.Header>
                    <Card.Body>
                        <Card.Title>This is very important.</Card.Title>
                        <Card.Text>
                             Please create your Dream Job below.
                    </Card.Text>
                    </Card.Body>
                </Card>   
            </div>
                
            ) : (
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
            )
            }
            
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
                    {(currentJobGoal === []) ? (
                        <button type="submit" className="btn btn-primary">Create</button>
                    ) : (
                        <button type="submit" className="btn btn-primary">Update</button>  
                    )}
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

export default connect(mapStateToProps, { createJobGoal ,postJobGoal,  updateJobGoal})(Job)