const React = require('react');
const $ = require('jquery');
const FullStar = require('../../dist/filledStar.png');
const EmptyStar = require('../../dist/emptyStar.png');

const Stars = (props) => {
  const { rating } = props;
  let starNum = Math.floor(rating);
  for (let i = 0; i < 5; i += 1) {
    if (starNum > 0) {
      starNum -= 1;
      $(this).closest('.Stars').append(<img src={FullStar} alt="FullStar" />);
    } else {
      $(this).closest('.Stars').append(<img src={EmptyStar} alt="EmptyStar" />);
    }
  }
};

export default Stars;
