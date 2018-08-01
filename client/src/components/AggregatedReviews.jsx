import Stars from './Stars';

const React = require('react');

const AggregatedReviews = (props) => {
  const { average, reviews } = props;
  return (
    <div className="AggregatedReviews">
      <div id="AvgRating">
        {average}
      </div>
      <div className="Stars">
        <Stars rating={average} />
      </div>
      <div id="TotalReviews">
        {reviews.length} reviews
      </div>
    </div>
  );
};

export default AggregatedReviews;
