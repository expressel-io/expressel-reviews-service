import Stars from './Stars';

const moment = require('moment');
const React = require('react');

const IndividualReviews = (props) => {
  const { review } = props;
  const {
    title,
    source,
    rating,
    text,
    date
  } = review;

  return (
    <div className="IndividualReview">
      <h3 className="Title">
        {title}
      </h3>
      <div className="Source">
        &bull;
        {source}
      </div>
      <div className="StarsAndDateContainer">
        <div className="Stars">
          <Stars rating={rating} />
        </div>
        <div className="Date">
          {moment(date).format("MMMM D, YYYY")}
        </div>
      </div>
      <div className="Text">
        {text}
      </div>
    </div>
  );
};

export default IndividualReviews;
