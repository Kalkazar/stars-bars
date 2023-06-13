import React, { Component } from 'react';
import star from './star.svg';

class RatingsTallyDisplay extends Component { // consider rnemaing
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return this.props.ratings.map(
            (ratingTally, index) => <div className='tally-row'>
                <div style={{ textAlign: 'left' }}>
                    {index === 0 ? "Zero Stars" : [...Array(index)].map(
                        (e, i) => <img src={star} className='scorecount-star' id={i} />
                    )}
                </div>
                <div style={{ textAlign: 'right' }}>
                    {ratingTally}
                </div>
            </div>
        );
    }
} // TODO: CLEAN THIS UP (need to fix the "key" thing that React's whining about)

export default RatingsTallyDisplay;
