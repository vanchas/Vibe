import React from "react";
import Slider from "react-slick";
import m1 from '../../assets/images/categories/model-1.png';
import m2 from '../../assets/images/categories/model-2.png';
import m3 from '../../assets/images/categories/model-3.png';
import m4 from '../../assets/images/categories/model-4.png';

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      dots: false
    };

    return (
      <Slider {...settings}
        style={{
          maxWidth: '1260px',
          margin: '0 auto'
        }}
      >
        <div>
          <img src={m1} alt="model" />
        </div>
        <div>
          <img src={m2} alt="model" />
        </div>
        <div>
          <img src={m3} alt="model" />
        </div>
        <div>
          <img src={m4} alt="model" />
        </div>
        <div>
          <img src={m1} alt="model" />
        </div>
        <div>
          <img src={m2} alt="model" />
        </div>
      </Slider>
    );
  }
}