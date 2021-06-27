import React from 'react';
import './Dice.css'

import empty from '../../img/dice/dice-empty.png'
import one from '../../img/dice/dice1.png'
import two from '../../img/dice/dice2.png'
import three from '../../img/dice/dice3.png'
import four from '../../img/dice/dice4.png'
import five from '../../img/dice/dice5.png'
import six from '../../img/dice/dice6.png'


const faces = [empty, one,two, three, four, five, six]

class Dice extends React.Component {

    state = {
        src: three,
        diceFace: empty
    }

    handleRandomFace = () => {
        
        this.setState({
            src: faces[Math.floor(Math.random() * faces.length)]
        })
    }
    render() {
        const {src} = this.state
        return (
            <div className="dice">
                <img src={src} onClick={this.handleRandomFace} alt='face' />
            </div>
        )
    }
}

export default Dice