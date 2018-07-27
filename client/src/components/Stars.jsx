const React = require('react');

const Stars = (props) => {
  const { rating } = props;
  if (Math.floor(rating) === 0) {
    return (
      <div className="Stars"> Take rating from props and render accordingly </div>
    );
  }
};

export default Stars;
