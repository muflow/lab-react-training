import React from 'react';
import './IdCard.css';

class IdCard extends React.Component {
    render() {
        return (
            <>
            <div className="card-container">
            <div class="profile-pic">
                <img src={this.props.img} alt="profile-pic" />
            </div>
            <div className="card-data">
            <p><span>First name:</span> {this.props.firstName}</p>
            <p><span>Last name:</span> {this.props.lastName}</p>
            <p><span>Gender:</span> {this.props.gender}</p>
            <p><span>Height:</span> {this.props.height}</p>
            <p><span>Birth:</span> {this.props.birth}</p>
            </div>
            </div>
            
            
            
            </>
        )
    };
}

export default IdCard;