const React = require('react');
const axios = require('axios');
const ReviewSummary = require('./ReviewSummary.jsx');
const ReviewList = require('./ReviewList.jsx');

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      itemId: 1,

    };
    this.getAllReviews = this.getAllReviews.bind(this);
    this.handleGetAllReviewsClick = this.handleGetAllReviewsClick.bind(this);
    this.getFirstReviews = this.getFirstReviews.bind(this);
    this.getAvgRating = this.getAvgRating.bind(this);
  }

  componentDidMount() {
    this.getFirstReviews();
  }

  getFirstReviews() {
    const { itemId } = this.state;
    axios.get(`/api/${itemId}/reviews/first`)
      .then((response) => {
        this.setState({
          reviews: response.data.map(reviews => reviews),
        });
      })
      .catch((error) => {
        console.log('There was an error getting the initial reviews: ', error);
      });
  }

  getAllReviews() {
    const { itemId } = this.state;
    axios.get(`/api/${itemId}/reviews`)
      .then((response) => {
        this.setState({
          reviews: response.data.map(reviews => reviews),
        });
      })
      .catch((error) => {
        console.log('There was an error getting all reviews: ', error);
      });
    console.log('In get all reviews!');
  }

  getAvgRating() {
    const { itemId } = this.state;
    axios.get(`/api/${itemId}/reviews/avg`)
      .then((response) => {
        this.setState({
          average: response.data,
        });
      })
      .catch((error) => {
        console.log('There was an error getting the average rating: ', error);
      });
  }

  handleGetAllReviewsClick(e) {
    console.log('clicked!', e);
    this.getAllReviews();
  }

  render() {
    const { reviews, average } = this.state;
    return (
      <div>
        <ReviewSummary reviews={reviews} average={average} />
        <ReviewList reviews={reviews} onClick={this.handleGetAllReviewsClick} />
      </div>
    );
  }
}

export default ReviewSection;
