import React from 'react';
import Rating from '../rating/Rating';

import './DriverCard.css';

function DriverCard(props) {
    
    return (
        <>
        <div className="drive-card-container" style={{color: `${props.color}`, background: `rgb(${props.r},${props.g},${props.b})` }}>
            <div className="driver-image-container"><img className="driver-image" src={props.img} alt="driver" /></div>
            <div className="driver-data">
                <h3>{props.driverName}</h3>
                <p className="star-rate"><Rating>{props.rating}</Rating></p>
                <p className="car-model">{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
        </>
    )

}

export default DriverCard

