import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import s from "./favorites.module.scss";
import m1 from "../../assets/images/main/model-cabinet/model-1.png";
import m2 from "../../assets/images/main/model-cabinet/model-2.png";
import m3 from "../../assets/images/main/model-cabinet/model-3.png";
import m4 from "../../assets/images/main/model-cabinet/model-4.png";

export default function Favorites() {
  var settings = {
    infinite: true,
    speed: 1000,
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
    <div className="pb-5">
      <Slider
        {...settings}
        style={{
          maxWidth: "1260px",
          margin: "0 auto",
        }}
      >
        {[m1, m2, m3, m4, m1, m2, m1, m2, m3, m4, m1, m2].map((m, i) => (
          <div key={i}>
            <div className={s.slide}>
              <div>
                <img src={m} alt="user" className="w-100" />
              </div>
              <div className={s.user_info}>
                <span>User Name</span>
                <span>Online</span>
                <span>Location</span>
                <span>
                  <Link href="/userProfile">
                    <a>VIEW PROFILE</a>
                  </Link>
                </span>
                <span>OTHER VIP</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
