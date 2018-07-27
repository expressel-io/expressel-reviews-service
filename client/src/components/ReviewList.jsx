import React from 'react';
import IndividualReviews from './IndividualReviews.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: 1,
    };
  }

  render() {
    return (
      <div className="ReviewList">
        { props.reviews.map((review) => {
          return <IndividualReviews review={review} onClick={props.onClick} />;
        })}
      </div>
    );
  }
}

export default ReviewList;
