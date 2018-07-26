import React from 'react';
import axios from 'axios';
import IndividualReviews from './IndividualReviews.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      itemId: 1,
    };
    this.getAllReviews = this.getAllReviews.bind(this);
    this.handleGetAllReviewsClick = this.handleGetAllReviewsClick.bind(this);
    this.getFirstReviews = this.getFirstReviews.bind(this);
  }

  getFirstReviews() {
    axios.get(`/api/reviews/first/${this.state.itemId}`)
      .then((response) => {
        this.setState({
          reviews: response.data.map(reviews => reviews)
        });
      });
  }

  getAllReviews() {
    axios.get(`/api/reviews/${this.state.itemId}`)
      .then((response) => {
        this.setState({
          reviews: response.data.map(reviews => reviews)
        });
      });
    console.log('In get all reviews!');
  }

  handleGetAllReviewsClick(e) {
    console.log('clicked!', e);
    this.getAllReviews();
  }

  render() {
    return (
      <div class='ReviewList'>
        {this.state.reviews.map((review) => { return <IndividualReviews review={review} onClick={this.handleGetAllReviewsClick}/>; })}
      </div>
    );
  }
}

export default ReviewList;
