import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { // TODO: delete anything here that's not used
    Box,
    // Card,
    // Tooltip
} from '@mui/material';
// import { BarChart } from '@mui/x-charts'; // delete if not used. Also uninstall if not used.

class StarsBars extends Component { // DECIDE ON PROPS. Probably "ratings" and "styles"
    constructor(props) {
        super(props);
        this.state = {
            testColors: [ // maybe rename to "defaultColors"
                '#9b110b',
                '#ab4500',
                '#af7000',
                '#a69a00',
                '#8cc300',
                '#4eeb05'
            ],
            testData: [2, 5, 7, 8, 9, 12] // TODO delete later
        };
        this.calculateGradient = this.calculateGradient.bind(this);
        this.generateHoverTexts = this.generateHoverTexts.bind(this);
    }
    calculateGradient() { // consider adding an "s" at the end: "calculateGradients"
        //
    }
    generateHoverTexts() {
        //
    }
    render() {
        const sumTotal = this.props.starRatingsData.reduce((acc, current) => acc + current, 0);
        return <div style={{display: 'flex'}}>
            {this.props.starRatingsData.map(
                (value, index) => (
                    <Box sx={{
                        bgcolor: this.state.testColors[index],
                        width: value / sumTotal,
                        height: 10,
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1, 2)'
                        }
                    }} />
                )
            )}
        </div>; // TODO: add a slight margin
    }
}

StarsBars.propTypes = {
    starRatingsData: PropTypes.array.isRequired,
    dataColors: PropTypes.array
    // barColorData: PropTypes.func.isRequired // consider renaming. Might not need to require either
}

export default StarsBars;
