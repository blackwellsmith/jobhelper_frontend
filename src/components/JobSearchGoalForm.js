import React from 'react'
import { connect } from 'react-redux'
import  JobCardNoGoal from './JobCardNoGoal.js'
import { getCurrentUser } from '../actions/currentUser.js'
import { createJobGoal, postJobGoal, updateJobGoal } from '../actions/jobSearchGoal.js' 
import JobCardWithGoal from './JobCardWithGoal.js'


class Job extends React.Component {

    componentDidMount() {
       this.props.getCurrentUser()
    }

    handleOnChange = (event) => {
        console.log(event)
        event.preventDefault()
        const { name, value } = event.target
        console.log(event)
        const jobGoal = {
            ...this.props.JobGoalFormData,
            [name]: value
        }
        this.props.createJobGoal(jobGoal)
    }

    handleOnSubmit = () => {
    
        (this.props.currentJobGoal === []) ? postJobGoal(this.props.JobGoalFormData) : updateJobGoal(this.props.JobGoalFormData, this.props.currentJobGoal.id)
    }

    render() {
        
    
        
      
        
        return (
            <div className="JobGoal">
                {console.log(this.props.currentJobGoal)}
                {(this.props.currentJobGoal === []) ? (
                    <JobCardWithGoal currentJobGoal={this.props.currentJobGoal}/>
                ) : (
                    <JobCardNoGoal />   
                        
                    )
                }
            
                <form onSubmit={this.props.handleOnSubmit}>
                    <div className="form-group">
                        <div className="form-small">
                            <input placeholder="Job goal description" className="form-control input-lg" defaultValue={this.props.JobGoalFormData.name} name="name" type='text' onChange={() => this.props.handleOnChange} required />
                        </div>
                    
                        <div className="form-small">
                            <input placeholder="Location of job: Dallas, Chattanooga, Remote, abroad...." className="form-control input-lg"defaultValue={this.props.JobGoalFormData.location} name="location" type='text' onChange={this.props.handleOnChange} required />
                        </div>
                    
                        <div className="form-small">
                            <input placeholder="What is your desired compensation? Recognize your strengths don't sell yourself short..." className="form-control input-lg" defaultValue={this.props.JobGoalFormData.pay} name="pay" type='text' onChange={this.props.handleOnChange} required />
                        </div>
                    
                        {(this.props.currentJobGoal === []) ? (
                            <button type="submit" className="btn btn-primary">Update</button>
                        ) : (
                                <button type="submit" className="btn btn-primary">Create</button>
                            )}
                    </div>
                </form>
            </div>
            
        )
    }
}
const mapStateToProps = state => {
    return {
        
        JobGoalFormData: state.jobSearchGoal,
        currentJobGoal: state.currentJobGoal
    } 
} 

export default connect(mapStateToProps, { createJobGoal ,postJobGoal,  updateJobGoal, getCurrentUser})(Job)