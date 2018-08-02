import PropTypes from 'prop-types';
import IndividualReviews from './IndividualReviews';

const React = require('react');

const ReviewList = (props) => {
  const {
    reviews,
    onClick,
  } = props;
  return (
    <div className="ReviewList">
      { reviews.map((review) => {
        return (
          <IndividualReviews review={review} />
        );
      })}
      <button id="allReviewsButton" type="button" onClick={onClick}>
        ALL REVIEWS
      </button>
    </div>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array,
  onClick: PropTypes.func,
};

ReviewList.defaultProps = {
  reviews: [],
  onClick: {},
};

export default ReviewList;
