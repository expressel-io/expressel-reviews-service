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
      totalReviewsPerRating: [],
    };
    this.getAllReviews = this.getAllReviews.bind(this);
    this.getFirstReviews = this.getFirstReviews.bind(this);
    this.getAvgRating = this.getAvgRating.bind(this);
    this.handleGetAllReviewsClick = this.handleGetAllReviewsClick.bind(this);
    this.getTotalReviewsPerRating = this.getTotalReviewsPerRating.bind(this);
    this.setTotalReviewsPerRating = this.setTotalReviewsPerRating.bind(this);
  }

  componentDidMount() {
    let itemId = parseInt(window.location.pathname.split('/')[2]);
    this.setState({
      itemId: itemId
    }, () => {
      this.getFirstReviews();
      this.getAllReviews();
      this.getAvgRating();
      this.getTotalReviewsPerRating();
    });
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

  handleGetAllReviewsClick() {
    console.log('clicked!');
    this.setState({
      renderedReviews: this.state.allReviews,
    });
  }

  getTotalReviewsPerRating() {
    console.log('getting number of star ratings');
    let itemId = parseInt(window.location.pathname.split('/')[2]);
    let starRatingCounts = [];
    for (let i = 1; i <= 5; i++) {
      axios.get(`http://localhost:3002/api/${itemId}/reviews/ratings/${i}`)
        .then((response) => {
          starRatingCounts.push(response.data[0]);
          console.log(response.data[0]);
          this.setTotalReviewsPerRating(starRatingCounts);
        })
        .catch((error) => {
          console.log('There was an error getting the total ratings: ', error);
        });      
    }
  }

  setTotalReviewsPerRating(starRatingCounts) {
    this.setState({
      totalReviewsPerRating: starRatingCounts,
    });   
  }

  render() {
    const { allReviews, renderedReviews, average, totalReviewsPerRating } = this.state;
    console.log(totalReviewsPerRating, 'totalReviewsPerRating');
    return (
      <div className="ReviewComponent">
        <ReviewSummary reviews={allReviews} average={average.average} ratingsCounts={totalReviewsPerRating}/>
        <ReviewList reviews={renderedReviews} onClick={this.handleGetAllReviewsClick} />
      </div>
    );
  }
}

export default ReviewSection;
