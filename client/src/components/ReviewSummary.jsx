import React from 'react';
import AggregatedReviews from './AggregatedReviews';
import StarBars from './StarBars';

// StarBars => get Math.floor of total number of x stars compared to total ratings
// fill up bar to same % of gold (CSS)
// remainder/default color of bar will be grey (CSS)
// text will be x on left of bar and % will be right of bar
// x is bold
// % is normal weight

// Snippets
// Titles bold
// search through files, find keywords and return close sentence featuring words
// if words not featured don't show the corresponding div

const ReviewSummary = (props) => {
  const { average, reviews, ratingsCounts } = props;
  return (
    <div className="ReviewSummary">
      <h2>
        Reviews Summary
      </h2>
      <div id="Bars">
        <StarBars ratingsCounts={ratingsCounts}/>
      </div>
      <div id="AggregatedReviews">
        <AggregatedReviews reviews={reviews} average={average} />
      </div>
      <div id="Snippets">
        <div id="Ease"> <span className="snippetTitle"> Ease of Use </span> "So easy to use." </div>
        <div id="Value"> <span className="snippetTitle"> Value </span> "Wao great value." </div>
        <div id="DesignAndStyle"> <span className="snippetTitle"> Design and Style </span> "Such style." </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
