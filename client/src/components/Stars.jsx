const React = require('react');
//const $ = require('jquery');

const Stars = () => {
  return (
    <div className="avgstars">
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star-o" aria-hidden="true" />
      <i className="fa fa-star-o" aria-hidden="true" />
      <i className="fa fa-star-o" aria-hidden="true" />
    </div>
  );
  // const { rating } = props;
  // let starNum = rating;
  // console.log(starNum, 'starnum');
  // for (let i = 0; i < 5; i += 1) {
  //   if (starNum > (1 / 2)) {
  //     starNum -= 1;
  //     $('div').closest('.Stars').append(<i className="fa fa-star" aria-hidden="true"></i>);
  //   } else if (starNum < 1 && starNum > (1 / 2)) {
  //     $(this).closest('.Stars').html(<i className="fa fa-star-half-o" aria-hidden="true"></i>);
  //   } else {
  //     $(this).closest('.Stars').html(<i className="fa fa-star-o" aria-hidden="true"></i>);
  //   }
  // }
  // return null;
};

export default Stars;
