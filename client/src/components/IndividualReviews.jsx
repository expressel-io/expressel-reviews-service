import Stars from './Stars';

const React = require('react');

const IndividualReviews = (props) => {
  const { review } = props;
  const {
    title,
    source,
    rating,
    text,
  } = review;

  return (
    <div className="IndividualReview">
      <div className="Title">
        {title}
      </div>
      <div className="Source">
        {source}
      </div>
      <div className="Stars">
        <Stars rating={rating} />
      </div>
      <div className="Text">
        {text}
      </div>
    </div>
  );
};

export default IndividualReviews;
