import React from 'react'
import { connect } from 'react-redux'
import { updateContactForm, newcontact } from '../actions/contactForm.js'

const ContactForm = ({ contactFormData, updateContactForm, newcontact }) => {
    
    const handleOnChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        const updatedContactForm = {
            ...contactFormData,
            [name]: value
        }
        updateContactForm(updatedContactForm)
    }

    const handleOnSubmit = event => {
        console.log('a')
        event.preventDefault()
        newcontact(contactFormData)
        //debugger
        //window.setTimeout(() => console.log('e'), 5000)
    }
    return (
        <div className="ContactForm"> 
            <br></br>
        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <div className="form">
                    <input placeholder="name" className="form-control input-lg" value={contactFormData.name} name="name" type='text' onChange={handleOnChange} required/>
                    </div>
                    
                <div className="form">
                    <input placeholder="place of business" className="form-control input-lg" value={contactFormData.company} name="company" type='text' onChange={handleOnChange} required/>
                    </div>
                    
                <div className="form">
                    <input placeholder="position" className="form-control input-lg" value={contactFormData.position} name="position" type='text' onChange={handleOnChange} required/>
                    </div>
                    
                <div className="form">
                    <input placeholder="contact information" className="form-control input-lg" value={contactFormData.contact_info} name="contact_info" type='text' onChange={handleOnChange} required/>
                    </div>
                    
                <button id='btn' type="submit" className="btn btn-primary">Submit Contact</button>
            </div> 
            <br></br>
        </form>
    </div>
    )
}
const mapStateToProps = state => {
    return {
        contactFormData: state.contactForm
    } 
}

export default connect(mapStateToProps, { updateContactForm, newcontact })(ContactForm)
