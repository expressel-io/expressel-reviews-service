const React = require('react');
const PropTypes = require('prop-types');
const IndividualReviews = require('./IndividualReviews');

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
      <button type="button" onClick={onClick}>
        ALL REVIEWS
      </button>
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
