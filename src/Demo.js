import React, { Component } from 'react';
import Ratings from 'react-ratings-declarative';

import RatingsTallyDisplay from './RatingsTallyDisplay';
import xSvgData from './x-symbol-svg-data.json'; // consider: "crossOutSymbolSvgData"
import './Demo.css'; // consider just making this part of "index.css"

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: [0, 0, 0, 0, 0, 0], // TODO: consider defining some other way
        };// also consider renaming, if you wind up using this "Ratings" component
        this.updateRatings = this.updateRatings.bind(this);
        this.resetRatings = this.resetRatings.bind(this);
        this.displayRatingsInput = this.displayRatingsInput.bind(this)
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
    displayRatingsInput() {
        return <Ratings changeRating={this.updateRatings}>
            {this.state.ratings.map(
                (ratingTally, index) => (
                    index === 0 ? <Ratings.Widget {...xSvgData}/> : <Ratings.Widget/>
                )
            )}
        </Ratings>; // see if you can put the ternary INSIDE of "Ratings.Widget"
    }
    render() {
        return <div className='Demo'>
            {this.displayRatingsInput()}
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
