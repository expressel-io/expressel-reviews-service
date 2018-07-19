const React = require('react');
const ReactDOM = require('react-dom');

const ReviewSummary = (props) => {
  return { 
  	<div class='ReviewSummary'>
  	<h2>Reviews Summary</h2>
      <div id="Bars">
        <div id="5Stars"> 5 STAR BAR HERE </div>
        <div id="4Stars"> 4 STAR BAR HERE </div>
        <div id="3Stars"> 3 STAR BAR HERE </div>
        <div id="2Stars"> 2 STAR BAR HERE </div>
        <div id="1Star"> 1 STAR BAR HERE </div>
      </div>
      <div id="AggregatedReviews">
        <div id="AvgRating"> NUMBER HERE </div>
        <div id="AvgStars"> STARS HERE </div>
        <div id="TotalReviews">2,129 reviews</div>
      </div>
      <div>
        <div id="Ease"> <span class="title"> Ease of Use </span> text from a review here</div>
        <div id="Value"> <span class="title"> Value </span> text from a review here</div>
        <div id="Design/Style"> <span class="title"> Design/Style </span> text from a review here</div>
      </div>
  	</div>
  }
};

export default ReviewSummary;
