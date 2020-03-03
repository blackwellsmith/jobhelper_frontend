import React from "react"
import Card from 'react-bootstrap/Card'

const JobCardNoGoal = () => {
   
    return (
       
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
    )
}

export default (JobCardNoGoal)