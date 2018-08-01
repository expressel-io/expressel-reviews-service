const React = require('react');

const Stars = (props) => {
  const { rating } = props;
  let starNum = rating;
  const stars = [];
  for (let i = 0; i < 5; i += 1) {
    if (starNum > (1 / 2)) {
      starNum -= 1;
      stars.push(<i className="fa fa-star" aria-hidden="true" />);
    } else if (starNum < 1 && starNum > (1 / 2)) {
      stars.push(<i className="fa fa-star-half-o" aria-hidden="true" />);
    } else {
      stars.push(<i className="fa fa-star-o" aria-hidden="true" />);
    }
  }
  return stars;
};

export default Stars;
