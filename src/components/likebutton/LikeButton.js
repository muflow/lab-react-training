import React from 'react';

class LikeButton extends React.Component {

    state = {
        count: 0,
        color: ['purple','blue','green','yellow','orange','red'],
    }
              
    handleIncrementClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleChangeColor = () => {
        console.log('random color')
        this.setState({
            color: ''
            
            
        })
    }
    

    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={() => {
        this.handleIncrementClick();
        this.handleChangeColor();
      }}>{count} Likes</button>
            </div>
        )
    }
}


export default LikeButton