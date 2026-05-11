import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Ratings from 'react-ratings-declarative';
// import { connect } from 'react-redux';
import xOutSymbolSvgData from './x-symbol-svg-data.json'; // was "xSvgData"
// consider renaming: "crossOutSymbolSvgData", "xOutSymbolSvgData", "xOutSvgData" etc.

class RatingsInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <Ratings changeRating={this.updateRatings}>
            {this.props.ratings.map(
                (ratingTally, index) => (
                    <Ratings.Widget {...(index === 0 ? xOutSymbolSvgData : {})}/>
                )
            )}
        </Ratings>;
    } // TODO: ADD "ratings" AND "updateRatings" TO PROPS!!!
}

// RatingsInput.propTypes = {
//     ratings: PropTypes.array.isRequired,
//     updateRatings: PropTypes.func.isRequired
// }

// // do I actually need this part? decide later
// const mapStateToProps = (state) => ({
//     // genre: state.config.selectedGenre,
//     // artistCount: state.config.selectedArtistCount,
//     // songCount: state.config.selectedSongCount,
//     // artists: state.play.artists,
//     // selectedArtist: state.play.selectedArtist,
//     // selectedSongs: state.play.selectedSongs,
//     // selectArtistGuess: state.play.selectArtistGuess,
//     // selectArtistCheck: state.play.selectArtistCheck
// })

// const mapDispatchToProps = (dispatch) => ({
//     // loadArtistsAndSongs: (config) => dispatch(loadArtistsAndSongs(config)),
//     // selectArtistGuess: artistGuess => dispatch(selectArtistGuess(artistGuess)),
//     // // selectArtistCheck: artistCheck => dispatch(selectArtistGuess(artistCheck))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(RatingsInput);
export default RatingsInput;
