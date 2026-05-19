import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Ratings from 'react-ratings-declarative'; // delete if not used
import { // delete anything here that's not used
    Box,
    Card,
    Tooltip
} from '@mui/material';
import { BarChart } from '@mui/x-charts'; // delete if not used. Also uninstall if not used.

class StarsBars extends Component { // DECIDE ON PROPS. Probably "ratings" and "styles"
    constructor(props) {
        super(props);
        this.state = {
            testColors: [ // maybe rename to "defaultColors"
                '#9b110b', '#ad5000', '#ac8500', '#95b900', '#4eeb05'
            ],
            testData: [5, 7, 8, 9, 20]
        };
        this.calculateWidths = this.calculateWidths.bind(this);
        this.calculateGradient = this.calculateGradient.bind(this);
        this.generateHoverTexts = this.generateHoverTexts.bind(this);
    }
    calculateWidths(starData) { // TODO: delete if not used
        const sumTotal = starData.reduce((acc, current) => acc + current, 0);
        return starData.map(
            (value, index) => (
                ((value / sumTotal) * 100).toFixed(2) + '%'
            )
        ); // TODO: MAKE SURE THIS ACTUALLY WORKS! Also remove "index" if not used
    }
    calculateGradient() {
        //
    }
    generateHoverTexts() {
        //
    }
    render() {
        const sumTotal = this.state.testData.reduce((acc, current) => acc + current, 0);
        return <div style={{display: 'flex'}}>
            {this.state.testData.map(
                (value, index) => (
                    <Box sx={{
                        width: value / sumTotal,
                        height: 25,
                        bgcolor: this.state.testColors[index],
                        // '&:hover': {} // TODO: use this later
                    }} />
                )
            )}
        </div>;
    }
}

StarsBars.propTypes = {
    starRatingsData: PropTypes.array.isRequired,
    // barColorData: PropTypes.func.isRequired // consider renaming. Might not need to require either
}

export default StarsBars;
