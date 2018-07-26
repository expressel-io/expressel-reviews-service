const React = require('react');
const ReactDOM = require('react-dom');
const ReviewSummary = require('./components/ReviewSummary.jsx');

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state {
      isLoaded: true,
      reviews: [],
      itemId: 1,
      average: '',
    }
    this.getAllReviews = this.getAllReviews.bind(this);
    this.handleGetAllReviewsClick = this.handleGetAllReviewsClick.bind(this);
    this.getFirstReviews = this.getFirstReviews.bind(this);
    this.getAvgRating = this.getAvgRating.bind(this);
  }

  getFirstReviews() {
    axios.get(`/api/reviews/first/${this.state.itemId}`)
      .then((response) => {
        this.setState({
          reviews: response.data.map(reviews => reviews)
        });
      });
      .catch((error) => {
        console.log('There was an error getting the initial reviews: ', error);
      })
  }

  getAllReviews() {
    axios.get(`/api/reviews/${this.state.itemId}`)
      .then((response) => {
        this.setState({
          reviews: response.data.map(reviews => reviews)
        });
      });
      .catch((error) => {
        console.log('There was an error getting all reviews: ', error);
      })
    console.log('In get all reviews!');
  }

  handleGetAllReviewsClick(e) {
    console.log('clicked!', e);
    this.getAllReviews();
  }

  // getAvgRating() {
  //   axios.get(`/api/reviews/${this.state.itemId}/avg`)
  //     .then((response) => {
  //       this.setState({
  //         average: response.data
  //       });
  //     });
  //     .catch((error) => {
  //       console.log('There was an error getting the average rating: ', error);
  //     })
  // }

  componentDidMount() {
    console.log('did mount');
    this.getFirstReviews();
  }

  render() {
    return (
      <div class='ReviewSummary'>
        <ReviewSummary reviews={this.state.reviews} />
      </div>
      <div class='ReviewList'> 
        <ReviewList reviews={this.state.reviews} onClick={this.handleGetAllReviewsClick}/>
      </div>
    );
  }
}

ReactDOM.render(<ReviewSection />, document.getElementById('Reviews'));
