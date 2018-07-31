const React = require('react');
const $ = require('jquery');
const FilledStar = require('../../dist/filledStar.png');
const HalfFilledStar = require('../../dist/halfFilledStar.png');
const EmptyStar = require('../../dist/emptyStar.png');

const Stars = (props) => {

  const { rating } = props;
  console.log(props, rating, 'props and rating in stars');
  let starNum = rating;
  for (let i = 0; i < 5; i += 1) {
    if (starNum > (1 / 2)) {
      starNum -= 1;
      $(this).closest('.Stars').append(<img src={FilledStar} alt="FilledStar" />);
    } else if (starNum < 1 && starNum > (1 / 2)) {
      $(this).closest('.Stars').append(<img src={HalfFilledStar} alt="HalfFilledStar" />);
    } else {
      $(this).closest('.Stars').append(<img src={EmptyStar} alt="EmptyStar" />);
    }
  }
  return null;

};

export default Stars;
