import React from "react"
import Card from 'react-bootstrap/Card'

const JobCardWithGoal = (props) => {
    //{console.log(props.currentJobGoal)}
    return (
       
                    <div className="badgecontainer">
                        <Card body bg="secondary" text="white" border="primary">
                            <Card.Header>Dream job</Card.Header>
                            <Card.Body>
                                <Card.Title>Title: {props.currentJobGoal.name}</Card.Title>
                                <Card.Title>Location: {props.currentJobGoal.location}</Card.Title>
                                <Card.Title>Compensation: {props.currentJobGoal.pay}</Card.Title>
                                <Card.Text>
                                    Update your Dream Job below.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
    )
}

export default (JobCardWithGoal)