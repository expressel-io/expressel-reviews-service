const React = require('react');
const axios = require('axios');

import ReviewSummary from './ReviewSummary';
import ReviewList from './ReviewList';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedReviews: [],
      allReviews: [],
      itemId: 2,
      average: '',
    };
    this.getAllReviews = this.getAllReviews.bind(this);
    this.handleGetAllReviewsClick = this.handleGetAllReviewsClick.bind(this);
    this.getFirstReviews = this.getFirstReviews.bind(this);
    this.getAvgRating = this.getAvgRating.bind(this);
  }

  componentDidMount() {
    this.getFirstReviews();
    this.getAllReviews();
    this.getAvgRating();
    console.log('component mounted');
  }
// pagination have it make --url/query parameters ? in the url

  getFirstReviews() {
    const { itemId } = this.state;
    axios.get(`/api/${itemId}/reviews/first`)
      .then((response) => {
        this.setState({
          renderedReviews: response.data, //
        });
      })
      .catch((error) => {
        console.log('There was an error getting the initial reviews: ', error);
      });
    console.log('get first reviews called');
  }

  getAllReviews() {
    const { itemId } = this.state;
    axios.get(`/api/${itemId}/reviews`)
      .then((response) => {
        this.setState({
          allReviews: response.data,
        });
      })
      .catch((error) => {
        console.log('There was an error getting all reviews: ', error);
      });
  }

  getAvgRating() {
    const { itemId } = this.state;
    console.log('getting avg');
    axios.get(`/api/${itemId}/reviews/avg`)
      .then((response) => {
        this.setState({
          average: response.data[0],
        });
      })
      .catch((error) => {
        console.log('There was an error getting the average rating: ', error);
      });
  }

  handleGetAllReviewsClick(e) {
    console.log('clicked!', e);
    this.setState({
      renderedReviews: this.state.allReviews,
    });
  }


  render() {
    const { allReviews, renderedReviews, average } = this.state;
    console.log(average, 'avg');
    return (
      <div className="ReviewComponent">
        <ReviewSummary reviews={allReviews} average={average.average}/>
        <ReviewList reviews={renderedReviews} onClick={this.handleGetAllReviewsClick} />
      </div>
    );
  }
}

export default ReviewSection;
