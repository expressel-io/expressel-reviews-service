const React = require('react');

const StarBarFiller = (props) => {
  const { percentage } = props;
  console.log(percentage);
  return (
    <div className="StarBarFiller" style={{width: `${percentage}%` }}> </div> 
  ) 
};

export default StarBarFiller;
