import React from 'react';

import './ClickablePicture.css'

import max from '../../img/persons/maxence.png'
import maxGlass from '../../img/persons/maxence-glasses.png'

class ClickablePicture extends React.Component {
    state = {
        src: max
    }

    handleChangeImage = () => {
        console.log('ciao')
        this.setState({
            src: maxGlass
        })
        
    }

    render() {
        const {src} = this.state
        
        return(
            <div className="picture">
                <img src={src} onClick={this.handleChangeImage} alt='max' />
            </div>
        )
    }
}

export default ClickablePicture