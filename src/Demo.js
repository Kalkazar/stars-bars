import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

import RatingsTallyDisplay from './RatingsTallyDisplay';
import './Demo.css';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: [0, 0, 0, 0, 0, 0], // TODO: consider defining some other way
        };
        this.updateRatings = this.updateRatings.bind(this);
        this.resetRatings = this.resetRatings.bind(this);
    }
    updateRatings(newVote) {
        const ratings = this.state.ratings;
        ratings[newVote - 1]++;
        this.setState({ ratings });
    }
    resetRatings() {
        const ratings = Array(this.state.ratings.length).fill(0);
        this.setState({ ratings });
    }
    render() {
        return <div className='Demo'>
            <StarRatings
                changeRating={this.updateRatings}
                numberOfStars={this.state.ratings.length}
                name='rating'
            />
            <div>
                <RatingsTallyDisplay ratings={this.state.ratings} />
            </div>
            <button onClick={this.resetRatings}>
                Reset Values
            </button>
        </div>;
    }
}

export default Demo;
