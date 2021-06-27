import React from 'react';

const imgs = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]


class Carousel extends React.Component {
    constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextImage = this.nextImage.bind(this);
		this.previousImage = this.previousImage.bind(this);
	}

    previousImage () {
        const lastIndex = imgs.length -1;
        const {currentImageIndex} = this.state;
        const resetIndex = currentImageIndex === 0;
        const index = resetIndex ? lastIndex : currentImageIndex -1;
        

        this.setState({
            currentImageIndex: index
        })
    }

    nextImage () {
        const lastIndex = imgs.length - 1;
		const { currentImageIndex } = this.state;
		const resetIndex = currentImageIndex === lastIndex;
		const index =  resetIndex ? 0 : currentImageIndex + 1;
        

		this.setState({
			currentImageIndex: index
		});
	}

    render() {
        
        return (
            <div>
                <img src={ imgs[this.state.currentImageIndex] } alt='carousel' />
                <button onClick={this.previousImage}>Next</button>
                <button onClick={this.nextImage}>previous</button>
            </div>
        )
    }
}

export default Carousel