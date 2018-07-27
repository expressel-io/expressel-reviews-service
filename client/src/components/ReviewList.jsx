import React from 'react';
import IndividualReviews from './IndividualReviews.jsx';

const ReviewList = (props) => {
  const {
    reviews,
    onClick,
  } = props;
  return (
    <div className="ReviewList">
      { reviews.map((review) => {
        return (
          <IndividualReviews review={review} onClick={onClick} />
        );
      })}
    </div>
  );
};

export default ReviewList;
