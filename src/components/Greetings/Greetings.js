import React from 'react';
import './Greetings.css'

function Greetings(props) {

    let message='';
    switch (props.lang) {
        case 'de':
        message = `Hallo ${props.children}`;
        break;

        case 'fr':
        message = "Bonjour";
        break;
            
    }

    return(
        <>
        <div class="msg-container">
        {message}
        </div>
        </>
    )

}


export default Greetings