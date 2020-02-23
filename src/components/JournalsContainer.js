import React from 'react'
import { connect } from 'react-redux'


const Journals = ({ journalIndex }) => {

    return (
        <div className="JournalsContainer">
            <ul>

            </ul>
            {}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        journalIndex: state.journals
    } 
}

export default connect(mapStateToProps)(Journals)