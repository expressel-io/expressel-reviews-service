const React = require('react');

const AggregatedReviews = (props) => {
  return (
    <div className="AggregatedReviews">
      <div id="AvgRating"> NUMBER HERE </div>
      <div id="AvgStars"> STARS HERE </div>
      <div id="TotalReviews">{props.reviews.length}</div>
    </div>
  )
};

export default AggregatedReviews;
