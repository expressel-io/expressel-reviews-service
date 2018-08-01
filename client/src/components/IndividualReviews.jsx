import Stars from './Stars';

const $ = require('jquery');
const React = require('react');

const IndividualReviews = (props) => {
  const { review } = props;
  const {
    title,
    source,
    rating,
    text,
  } = review;

  let starNum = rating;

  for (let i = 0; i < 5; i += 1) {
    if (starNum > (1 / 2)) {
      console.log('histars');
      starNum -= 1;
      $('.Stars').append(<i className="fa fa-star" aria-hidden="true"></i>);
    } else if (starNum < 1 && starNum > (1 / 2)) {
      $(this).closest('.Stars').html(<i className="fa fa-star-half-o" aria-hidden="true"></i>);
    } else {
      $(this).closest('.Stars').html(<i className="fa fa-star-o" aria-hidden="true"></i>);
    }
  }
  return (
    <div className="IndividualReview">
      <h3 className="Title">
        {title}
      </h3>
      <div className="Source">
        &bull; {source}
      </div>
      <div className="Date">
        
      </div>
      <div className="Stars">
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
      </div>
      <div className="Text">
        {text}
      </div>
    </div>
  );
};

  //<Stars rating={rating} />

export default IndividualReviews;
