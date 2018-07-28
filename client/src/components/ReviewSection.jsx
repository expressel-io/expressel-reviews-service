const React = require('react');
const axios = require('axios');
const ReviewSummary = require('./ReviewSummary');
const ReviewList = require('./ReviewList');

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      itemId: '',
    };
    this.getAllReviews = this.getAllReviews.bind(this);
    this.handleGetAllReviewsClick = this.handleGetAllReviewsClick.bind(this);
    this.getFirstReviews = this.getFirstReviews.bind(this);
    this.getAvgRating = this.getAvgRating.bind(this);
  }

  componentDidMount() {
    this.getFirstReviews();
  }
// pagination have it make --url/query parameters ? in the url

  getFirstReviews() {
    const { itemId } = this.state;
    axios.get(`/api/${itemId}/reviews/first`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          reviews: response.data, //
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
          reviews: response.data,
        });
      })
      .catch((error) => {
        console.log('There was an error getting all reviews: ', error);
      });
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
