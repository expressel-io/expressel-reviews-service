import ReviewSummary from './ReviewSummary';
import ReviewList from './ReviewList';

const React = require('react');
const axios = require('axios');

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedReviews: [],
      allReviews: [],
      itemId: '',
      average: '',
    };
    this.getAllReviews = this.getAllReviews.bind(this);
    this.getFirstReviews = this.getFirstReviews.bind(this);
    this.getAvgRating = this.getAvgRating.bind(this);
    this.handleGetAllReviewsClick = this.handleGetAllReviewsClick.bind(this);
  }

  componentDidMount() {

    this.getFirstReviews();
    this.getAllReviews();
    this.getAvgRating();
    console.log('component mounted');
  }

  getFirstReviews() {
    let itemId = parseInt(window.location.pathname.split('/')[2]);
    axios.get(`http://localhost:3002/api/${itemId}/reviews/first`)
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
    let itemId = parseInt(window.location.pathname.split('/')[2]);
    axios.get(`http://localhost:3002/api/${itemId}/reviews`)
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
    let itemId = parseInt(window.location.pathname.split('/')[2]);
    console.log('getting avg');
    axios.get(`http://localhost:3002/api/${itemId}/reviews/avg`)
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
    return (
      <div className="ReviewComponent">
        <ReviewSummary reviews={allReviews} average={average.average} />
        <ReviewList reviews={renderedReviews} onClick={this.handleGetAllReviewsClick} />
      </div>
    );
  }
}

export default ReviewSection;
