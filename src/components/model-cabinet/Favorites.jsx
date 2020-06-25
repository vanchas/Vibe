import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import s from "./favorites.module.scss";
import m1 from "../../assets/images/main/model-cabinet/model-1.png";


export default function Favorites({ favorites }) {
  const settings = {
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
      {favorites && favorites.length ?
        <Slider
          {...settings}
          style={{
            maxWidth: "1260px",
            margin: "0 auto",
          }}
        >
          {favorites.map((favorite, i) => (
            <div key={i}>
              <div className={s.slide}>
                <div>
                  <img src={m1} alt="user" className="w-100" />
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
        : <div className="text-info py-5 text-center">
          No Favorites...</div>}
    </div>
  );
}
