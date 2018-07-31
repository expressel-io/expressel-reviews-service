const React = require('react');
const axios = require('axios');
const AggregatedReviews = require('./AggregatedReviews');
const Snippets = require('./ReviewSnippets');

// import { Platform, StyleSheet, Text, View } from 'react-native';

// StarBars => get Math.floor of total number of x stars compared to total ratings
// fill up bar to same % of gold (CSS)
// remainder/default color of bar will be grey (CSS)
// text will be x on left of bar and % will be right of bar
// x is bold
// % is normal weight

// AggregatedReviews
// AvgRating => reduce ratings rating to avg, display in AvgRating
// AvgStars => reduce ratings to avg, depending on rating
// if rating is in ranges change the number of colored stars
// ie 5 stars = full five stars
// TotalReviews => ${Review count} reviews in blue

// Snippets
// Titles bold
// search through files, find keywords and return close sentence featuring words
// if words not featured don't show the corresponding div

class ReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FiveStar: '',
      FourStar: '',
      ThreeStar: '',
      TwoStar: '',
      OneStar: '',
    };
  }

  getTotalRatingsPerRating() {
    axios.get(`/api/${itemId}/reviews/ratings`)
      .then((response) => {
        this.setState({
          FiveStar: '',
          FourStar: '',
          ThreeStar: '',
          TwoStar: '',
          OneStar: '',
        });
      })
      .catch((error) => {
        console.log('There was an error getting the average rating: ', error);
      });
  }

  render() {
    const { average, reviews } = props;
    return (
      <div class='ReviewSummary'>
        <h2>
          Reviews Summary
        </h2>
        <div id="Bars">
          <div id="5Stars"> 5 STAR BAR HERE </div>
          <div id="4Stars"> 4 STAR BAR HERE </div>
          <div id="3Stars"> 3 STAR BAR HERE </div>
          <div id="2Stars"> 2 STAR BAR HERE </div>
          <div id="1Star"> 1 STAR BAR HERE </div>
        </div>
        <div id="AggregatedReviews">
          <AggregatedReviews reviews={reviews} average={average} />
        </div>
        <div id="Snippets">
          <Snippets reviews={reviews} />
        </div>
      </div>
    );
  }
}

export default ReviewSummary;
