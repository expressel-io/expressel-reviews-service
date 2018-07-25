import React from 'react';
import IndividualReviews from './IndividualReviews.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    this.getAllReviews = this.getAllReviews.bind(this);
    this.handleGetAllReviewsClick = this.handleGetAllReviewsClick.bind(this);
  }

  getAllReviews() {
    console.log('In get all reviews!')
  }

  handleGetAllReviewsClick(e) {
    console.log('clicked!', e);
    getAllReviews();
  }

  render() {
    return (
      <div>
        {this.state.reviews.map((review) => { return <IndividualReviews review={review} />; })}
      </div>
    );
  }
}

export default ReviewList;
