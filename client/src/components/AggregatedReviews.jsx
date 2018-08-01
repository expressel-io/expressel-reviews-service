const React = require('react');

import Stars from './Stars';

const AggregatedReviews = (props) => {
  console.log(props, 'props in ar');
  const { average, reviews } = props;
  console.log(average, 'reviews in ar');
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
