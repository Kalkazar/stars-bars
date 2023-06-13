import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import './Demo.css';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
        };
        this.changeRating = this.changeRating.bind(this);
    }
    changeRating(newRating) {
        this.setState({
            rating: newRating
        });
    }
    render() {
        return <div className="Demo">
            <StarRatings
                rating={this.state.rating}
                starRatedColor="blue"
                changeRating={this.changeRating}
                numberOfStars={6}
                name='rating'
            />
        </div>;
    }
}

export default Demo;
