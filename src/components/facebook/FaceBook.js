import React from 'react';

import './FaceBook.css'

import profiles from '../../data/berlin.json'


class FaceBook extends React.Component {
    render() {
        const {firstName, lastName, country, isStudent, img} = this.props
        return (
             <>
            <div className="student-container">
            <div class="student-pic">
                <img src={img} alt="profile-pic" />
            </div>
            <div className="student-data">
            <p><span>First name:</span> {firstName}</p>
            <p><span>Last name:</span> {lastName}</p>
            <p><span>Country:</span> {country}</p>
            <p><span>Type:</span> {isStudent ? 'Student' : 'Teacher'}</p>
            
            </div>
            </div>
            </>
        )
    }
}

export default FaceBook;