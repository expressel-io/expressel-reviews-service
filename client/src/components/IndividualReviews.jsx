const React = require('react');

import Stars from '.Stars.jsx';

const IndividualReviews = (props) => {
  return (
    <div class="Title"> {props.review.title} </div>
    <div class="Source"> {props.review.source} </div>
    <div class="Stars"> <Stars rating={props.review.rating}/> </div>
    <div class="Text"> {props.review.text} </div>
  )
};

export default IndividualReviews;