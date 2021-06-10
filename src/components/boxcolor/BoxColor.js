import React from 'react';
import './BoxColor.css'

function BoxColor(props) {

    return (
        <>
        <div className="color-container" style={{color: `${props.color}`, background: `rgb(${props.r},${props.g},${props.b})` }}>
            <p className="text"> rgb({props.r},{props.g},{props.b}) </p>
            <p >{props.children}</p>
        </div>
        </>
    )
}

export default BoxColor