import React from 'react';
import './CreditCard.css';

function CreditCard(props) {

    return (
        <>
        <div className="bank-card-container" style={{color: `${props.color}`, background: `rgb(${props.r},${props.g},${props.b})` }}>
            <div className="logo-container"><img className="logo" src={props.logo} alt="visa-logo"/></div>
            <div className="card-number">•••• •••• •••• {props.cardNumber}</div>
            <span class="card-data">{props.expireDate}</span> <span class="card-data">{props.bankName}</span>
            <br></br>
            <span class="card-data">{props.ownerName}</span>
        </div>
        </>
    )
}



export default CreditCard;