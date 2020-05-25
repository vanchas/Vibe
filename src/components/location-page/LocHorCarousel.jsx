import React from "react";
import Link from 'next/link';
import Slider from "react-slick";
import s from "./horizontal.module.scss";
import m1 from "../../assets/images/main/location/model-1.png";
import m2 from "../../assets/images/main/location/model-2.png";
import fav from "../../assets/images/main/signs/favorite-yel.png";
import crown from "../../assets/images/main/signs/crown-yel.png";
import star from "../../assets/images/main/signs/star-yel.png";
import plane from "../../assets/images/main/signs/plane-yel.png";

export default function LocHorCarousel() {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 8000,
    draggable: false,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }]
  };

  return (
    <div className={s.loc_hor_carousel}>
      <div className={s.loc_hor_carousel_header}>
        <h5 className="text-white">Paid Announcements</h5>
      </div>
      <Slider
        {...settings}
        style={{
          maxWidth: "1260px",
          margin: "0 auto",
        }} >
        {[m1, m2, m1, m2, m1, m2].map((m, i) => {
          return <div key={i}>
            <Link href="/modelProfile"><a>
              <div className={s.loc_hor_carousel_slide}>
                <img src={m} alt="model" className="w-100" />
                <div className={s.loc_slide_info}>
                  <div className={s.loc_slide_info_head}>
                    <h5 className="text-white">Model Name</h5>
                    <div className={s.slide_network}>Online</div>
                    <div className={s.slide_control}>
                      <img src={fav} alt="" />
                      <img src={crown} alt="" />
                      <img src={star} alt="" />
                      <img src={plane} alt="" />
                    </div>
                  </div>
                  <div className={s.slide_location}>
                    <p className="m-0">Location</p>
                  </div>
                  <div className={s.slide_verification}>
                    <span className={s.verification}>OTHER VIP VERIFIED</span>
                    <span className={`text-white ${s.status}`}>SPECIAL STATUS</span>
                  </div>
                </div>
              </div>
            </a></Link>
          </div>
        })}
      </Slider>
    </div>
  );
}
