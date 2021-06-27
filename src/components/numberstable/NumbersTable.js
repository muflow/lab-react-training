import React from 'react';

import './NumbersTabel.css'

function NumbersTable(props) {
  const numbers = Array.from(Array(props.limit));

  return (
    <div style={{ width: 300, display: 'flex', flexFlow: 'row wrap' }}>
      {numbers.map((index, num) => (
        <div
          style={{
            height: '50px',
            width: '50px',
            border: '1px solid black',
            backgroundColor: `${(num + 1) % 2 === 0 ? 'white' : 'red'}`,
          }}
          key={num + 1}
        >
          {num + 1}
        </div>
      ))}
    </div>
  );
}


export default NumbersTable