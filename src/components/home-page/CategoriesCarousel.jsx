import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";
import s from "./categories.module.scss";
import m1 from "../../assets/images/categories/model-1.png";
import m2 from "../../assets/images/categories/model-2.png";
import m3 from "../../assets/images/categories/model-3.png";
import m4 from "../../assets/images/categories/model-4.png";

export default function SimpleSlider(props) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    setModels([m1, m2, m3, m4, m1, m2]);
  }, [m1, m2, m3, m4, m1, m2]);

  var settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 10000,
    draggable: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider
      {...settings}
      style={{
        maxWidth: "1260px",
        margin: "0 auto",
      }}
    >
      {models.length ? models.map((m, i) => (
        <div key={i}>
          <div className={s.slide}>
            <Link href="/modelProfile">
              <a>
                <img src={m} alt="model" className="w-100" />
                <div>
                  <span>Model Name</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      )) : null}
    </Slider>
  );
}
