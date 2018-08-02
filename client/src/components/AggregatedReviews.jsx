import Stars from './Stars';

const React = require('react');

const AggregatedReviews = (props) => {
  const { average, reviews } = props;
  let roundedAverage = null;
  if (average !== undefined) {
  	roundedAverage = average.toFixed(1);
  }
  return (
    <div className="AggregatedReviews">
      <div id="AvgRating">
        {roundedAverage !== null ? roundedAverage : average}
      </div>
      <div id="AvgStars">
        <Stars rating={average} />
      </div>
      <div id="TotalReviews">
        {reviews.length} reviews
      </div>
    </div>
  );
};

export default AggregatedReviews;
