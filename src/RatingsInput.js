import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Ratings from 'react-ratings-declarative';
import crossOutSymbolSvg from './x-symbol-svg-data.json';

class RatingsInput extends Component { // consider renaming: "StarRatingsInput"
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <Ratings changeRating={this.props.updateRatings}>
            {this.props.ratings.map(
                (ratingTally, index) => (
                    <Ratings.Widget {...(index === 0 ? crossOutSymbolSvg : {})}/>
                )
            )}
        </Ratings>;
    }
}

RatingsInput.propTypes = {
    ratings: PropTypes.array.isRequired,
    updateRatings: PropTypes.func.isRequired
}

export default RatingsInput;
