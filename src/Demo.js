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
            // starRatingsData: [0, 0, 0, 0, 0, 0], // TODO: consider defining some other way
            starRatingsData: [1, 1, 1, 1, 1, 1], // TEMPORARY; remove later
        };
        this.updateRatings = this.updateRatings.bind(this);
        this.resetRatings = this.resetRatings.bind(this);
        this.displayRatingsInput = this.displayRatingsInput.bind(this)
    }
    updateRatings(newVote) {
        const starRatingsData = [...this.state.starRatingsData];
        starRatingsData[newVote - 1]++;
        this.setState({ starRatingsData });
    }
    resetRatings() {
        // const starRatingsData = Array(this.state.ratings.length).fill(0);
        const starRatingsData = Array(this.state.starRatingsData.length).fill(1); // TEMPORARY; remove later
        this.setState({ starRatingsData });
    }
    displayRatingsInput() {
        return <Ratings changeRating={this.updateRatings}>
            {this.state.starRatingsData.map(
                (ratingTally, index) => (
                    <Ratings.Widget {...(index === 0 ? xSvgData : {})}/>
                )
            )}
        </Ratings>;
    }
    render() {
        return <div className='Demo'>
            <RatingsInput
                ratings={this.state.starRatingsData}
                updateRatings={this.updateRatings}
            />
            <StarsBars
                starRatingsData={this.state.starRatingsData}
            />
            <div>
                <RatingsTallyDisplay ratings={this.state.starRatingsData} />
            </div>
            <button onClick={this.resetRatings}>
                Reset Values
            </button>
        </div>;
    }
}

export default Demo;
