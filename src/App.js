import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.changeRating = this.changeRating.bind(this);
  }
  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
  }
  render() {
    return (
      <div className="App">
        <StarRatings
            rating={this.state.rating}
            starRatedColor="blue"
            changeRating={this.changeRating}
            numberOfStars={6}
            name='rating'
        />
      </div>
    );
  }
}

export default App;
