import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import star from './star.svg';
import './Demo.css';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: [0, 0, 0, 0, 0, 0], // TODO: consider defining some other way
        };
        this.updateRatings = this.updateRatings.bind(this);
        this.resetRatings = this.resetRatings.bind(this);
        this.displayRatingsTally = this.displayRatingsTally.bind(this);
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
    displayRatingsTally() { // TODO: consider making this its own component
        // also consider just defining this in the "render" method below
        return this.state.ratings.map(
            (ratingTally, index) => <div className='tally-row'>
                <div style={{ textAlign: 'left' }}>
                    {index === 0 ? "Zero Stars" : [...Array(index)].map(
                        (e, i) => <img src={star} className='scorecount-star' key={i} />
                    )}
                </div>
                <div style={{ textAlign: 'right' }}>
                    {ratingTally}
                </div>
            </div>
        ); // TODO: CLEAN THIS UP
    }
    render() {
        return <div className='Demo'>
            <StarRatings
                changeRating={this.updateRatings}
                numberOfStars={this.state.ratings.length}
                name='rating'
            />
            <div>
                {this.displayRatingsTally()}
            </div>
            <button onClick={this.resetRatings}>
                Reset Values
            </button>
        </div>;
    }
}

export default Demo;
