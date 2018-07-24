const React = require('react');
const ReactDOM = require('react-dom');
const ReviewSummary = require('./components/ReviewSummary.jsx');

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state {
      isLoaded: true;
    }
  }

  render() {
    return (
      <div class="ReviewSummary">
        <ReviewSummary/>
      </div>
      <div> 
        ReviewList
      </div>
    );
  }
}

ReactDOM.render(<ReviewSection />, document.getElementById('Reviews'));
