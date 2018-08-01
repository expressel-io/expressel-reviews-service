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
      <h3 className="Title">
        {title}
      </h3>
      <div className="Source">
        &bull;
        {source}
      </div>
      <div className="Date">
        
      </div>
      <div className="Stars">
        <Stars rating={rating}/>
      </div>
      <div className="Text">
        {text}
      </div>
    </div>
  );
};

  //<Stars rating={rating} />

export default IndividualReviews;
