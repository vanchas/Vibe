import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import s from "./categories.module.scss";
import m1 from "../../assets/images/categories/model-1.png";
import m2 from "../../assets/images/categories/model-2.png";
import m3 from "../../assets/images/categories/model-3.png";
import m4 from "../../assets/images/categories/model-4.png";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      dots: false,
    };

    return (
      <Slider
        {...settings}
        style={{
          maxWidth: "1260px",
          margin: "0 auto",
        }}
      >
        <div>
          <div className={s.slide}>
            <Link href="/modelProfile">
              <a>
                <img src={m1} alt="model" className="w-100" />
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div className={s.slide}>
            <Link href="/modelProfile">
              <a>
                <img src={m2} alt="model" className="w-100" />
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div className={s.slide}>
            <Link href="/modelProfile">
              <a>
                <img src={m3} alt="model" className="w-100" />
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div className={s.slide}>
            <Link href="/modelProfile">
              <a>
                <img src={m4} alt="model" className="w-100" />
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div className={s.slide}>
            <Link href="/modelProfile">
              <a>
                <img src={m1} alt="model" className="w-100" />
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div className={s.slide}>
            <Link href="/modelProfile">
              <a>
                <img src={m2} alt="model" className="w-100" />
              </a>
            </Link>
          </div>
        </div>
      </Slider>
    );
  }
}
