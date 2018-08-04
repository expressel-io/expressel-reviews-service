const React = require('react');

import StarBarFiller from './StarBarFiller';

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
