const React = require('react');

import StarBarFiller from './StarBarFiller';

// map through the number of expected bars (5)
// for each one place a grey bar same width
// place a gold bar relative to the amount of ratings re: total ratings on top of the grey bar
// place the star value left of the grey bar
// place percentage right side of the grey bar

// find total of n star reviews
// have review bar full length (40%)

// {props.STARSUM.map((bar) => { return (<div class="bar"><div>}))}

const StarBars = (props) => {
  const {
    ratingsCounts
  } = props;
  if (ratingsCounts.length === 5) {
    return (
      <div className="StarBars">
        {ratingsCounts.map((ratingCount) => {
          let count = Object.values(ratingCount);
          let num = Object.keys(ratingCount)
          return (
            <div className="StarBar">
              <div className="StarBarNum">{num}</div> <div className="StarBarOuterBar"> <StarBarFiller percentage={count} /> </div> <div className="StarBarPercentage"> {count}% </div>
            </div>
          )
        })}
      </div>
    );  
  } else {
  	return null;
  }
};

export default StarBars;
