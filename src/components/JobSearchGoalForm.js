import React from 'react'
import { connect } from 'react-redux'
import  JobCardNoGoal from './JobCardNoGoal.js'
import { getCurrentUser } from '../actions/currentUser.js'
import JobCardWithGoal from './JobCardWithGoal.js'
import GoalForm from './GoalForm.js'
import UpdateGoalForm from './UpdateGoalForm.js'
import { jobGoal } from '../actions/currentJobGoal.js'


class Job extends React.Component {

     componentDidMount() {
        this.props.jobGoal()
     }

    render() {
         
        return (
            <>
                <div className="JobGoal">
                {console.log(this.props.currentJobGoal)}
                    { this.props.currentJobGoal === null ? (<div><JobCardNoGoal /><GoalForm /> </div>
                    
                    ) : (<div>
                        <JobCardWithGoal currentJobGoal={this.props.currentJobGoal} />
                        <UpdateGoalForm />
                        </div>
                    )}
                </div> 
            </>    
         )
    }
}
const mapStateToProps = state => {
    return {
        
        
        currentJobGoal: state.currentJobGoal
    } 
} 

export default connect(mapStateToProps, { getCurrentUser, jobGoal })(Job)