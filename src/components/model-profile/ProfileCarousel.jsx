import React from "react";
import s from "./profile.module.scss";
import Slider from "react-slick";
import m1 from "../../assets/images/main/model-profile/model-1.png";
import m2 from "../../assets/images/main/model-profile/model-2.png";

export default function ProfileCarousel() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  };

  return (
    <div className="w-100" style={{background: '#1b1c1f'}}>
      <Slider
        {...settings}
        style={{
          maxWidth: "1260px",
          margin: "0 auto"
        }}
      >
        <div>
          <div className={s.slide}>
            <img src={m1} alt="model" className="mx-auto" />
          </div>
        </div>
        <div>
          <div className={s.slide}>
            <img src={m2} alt="model" className="mx-auto" />
          </div>
        </div>
      </Slider>
    </div>
  );
}
