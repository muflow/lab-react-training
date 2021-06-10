import React from 'react';
import './Random.css'

function Random (props) {
  let num = Math.floor(Math.random() * (props.max - props.min)) + props.min;

  return (
      <>
      <div className="container">Random value between {props.min} and {props.max} => {num}</div>
      </>
  )
}

export default Random