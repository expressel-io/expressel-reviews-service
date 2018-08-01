const React = require('react');
const PropTypes = require('prop-types');
import IndividualReviews from './IndividualReviews';

const ReviewList = (props) => {
  const {
    reviews,
    onClick,
  } = props;
  console.log(onClick);
  return (
    <div className="ReviewList">
      { reviews.map((review) => {
        return (
          <IndividualReviews review={review} />
        );
      })}
      <button className="allReviewsButton" type="button" onClick={onClick}>
        ALL REVIEWS
      </button>
    </div>
  );
};

ReviewList.propTypes = {
  //reviews: PropTypes.arrayof(PropTypes.object),
  //onClick: PropTypes.func,
};

ReviewList.defaultProps = {
  //reviews: [],
  // onClick: {},
};

export default ReviewList;
