import React from 'react';
import './Rating.css'

function Rating(props) {
    let rate = Math.round(props.children)
    let star = ''
    for(let i = 0; i < 5; i++){
        if(i < rate){
            star += `★`
        }else{
            star += `☆`
        }
    }
    
    return (
        <>
        <div className="stars-container">
            {star}
        </div>
        <br/>
        </>
    )
}


export default Rating