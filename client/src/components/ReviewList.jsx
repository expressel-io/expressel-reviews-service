import React from 'react';
import PropTypes from 'prop-types';
import IndividualReviews from './IndividualReviews';

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

ReviewList.propTypes = {
  reviews: PropTypes.arrayof(PropTypes.object),
  onClick: PropTypes.func,
};

ReviewList.defaultProps = {
  reviews: [],
  // onClick: {},
};

export default ReviewList;
