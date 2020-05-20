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
      <div>
        <div className={s.slide}>
          <div>
            <img src={m2} alt="user" className="w-100" />
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
      <div>
        <div className={s.slide}>
          <div>
            <img src={m3} alt="user" className="w-100" />
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
      <div>
        <div className={s.slide}>
          <div>
            <img src={m4} alt="user" className="w-100" />
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
      <div>
        <div className={s.slide}>
          <div>
            <img src={m2} alt="user" className="w-100" />
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
      <div>
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
    </Slider>
  );
}
