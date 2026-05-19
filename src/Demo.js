import React, { Component } from 'react';
import Ratings from 'react-ratings-declarative';

import RatingsTallyDisplay from './RatingsTallyDisplay';
import RatingsInput from './RatingsInput';
import StarsBars from './StarsBars';
import xSvgData from './x-symbol-svg-data.json'; // consider: "crossOutSymbolSvgData"
import './Demo.css'; // consider just making this part of "index.css"

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // ratings: [0, 0, 0, 0, 0, 0], // TODO: consider defining some other way
            ratings: [1, 1, 1, 1, 1, 1], // TEMPORARY; remove later
        };
        // also consider renaming, if you wind up using this "Ratings" component
        // maybe "starRatings". Or "starRatingsData"
        this.updateRatings = this.updateRatings.bind(this);
        this.resetRatings = this.resetRatings.bind(this);
        this.displayRatingsInput = this.displayRatingsInput.bind(this)
    }
    updateRatings(newVote) {
        const ratings = [...this.state.ratings];
        ratings[newVote - 1]++;
        this.setState({ ratings });
    }
    resetRatings() {
        // const ratings = Array(this.state.ratings.length).fill(0);
        const ratings = Array(this.state.ratings.length).fill(1); // TEMPORARY; remove later
        this.setState({ ratings });
    }
    displayRatingsInput() {
        return <Ratings changeRating={this.updateRatings}>
            {this.state.ratings.map(
                (ratingTally, index) => (
                    <Ratings.Widget {...(index === 0 ? xSvgData : {})}/>
                )
            )}
        </Ratings>;
    }
    render() {
        return <div className='Demo'>
            <RatingsInput
                ratings={this.state.ratings}
                updateRatings={this.updateRatings}
            />
            <div>
                <RatingsTallyDisplay ratings={this.state.ratings} />
            </div>
            <button onClick={this.resetRatings}>
                Reset Values
            </button>
            <StarsBars/>
        </div>;
    }
}

export default Demo;
