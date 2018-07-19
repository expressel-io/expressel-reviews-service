const React = require('react');
const ReactDOM = require('react-dom');

//StarBars => get Math.floor of total number of x stars compared to total ratings
  //fill up bar to same % of gold (CSS)
  //remainder/default color of bar will be grey (CSS)
  //text will be x on left of bar and % will be right of bar
  //x is bold
  //% is normal weight

//AggregatedReviews  
  //AvgRating => reduce ratings rating to avg, display in AvgRating
  //AvgStars => reduce ratings to avg, depending on rating 
    //if rating is in ranges change the number of colored stars
    //ie 5 stars = full five stars
  //TotalReviews => ${Review count} reviews in blue

//Snippets
  //Titles bold
  //search through files, find keywords and return close sentence featuring words
  //if words not featured don't show the corresponding div

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
      <div id="Snippets">
        <div id="Ease"> <span class="title"> Ease of Use </span> text from a review here</div>
        <div id="Value"> <span class="title"> Value </span> text from a review here</div>
        <div id="Design/Style"> <span class="title"> Design/Style </span> text from a review here</div>
      </div>
  	</div>
  }
};

export default ReviewSummary;
