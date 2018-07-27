import Stars from './Stars.jsx';

const React = require('react');

const IndividualReviews = (props) => {
  return (
    <div className="IndividualReview">
      <div className="Title"> {props.review.title} </div>
      <div className="Source"> {props.review.source} </div>
      <div className="Stars"> <Stars rating={props.review.rating}/> </div>
      <div className="Text"> {props.review.text} </div>
    </div>
  );
};

export default IndividualReviews;
