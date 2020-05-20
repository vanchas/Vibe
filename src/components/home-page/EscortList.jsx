import React from 'react'
import Slider from "react-slick"
import s from './escort.module.scss'
import m1 from '../../assets/images/main/horizontal/model-1.png'
import m2 from '../../assets/images/main/horizontal/model-2.png'
import m3 from '../../assets/images/main/horizontal/model-3.png'
import m4 from '../../assets/images/main/horizontal/model-4.png'
import fav from '../../assets/images/main/signs/favorite-pink.png'
import plane from '../../assets/images/main/signs/plane-pink.png'
import star from '../../assets/images/main/signs/star-pink.png'
import crown from '../../assets/images/main/signs/crown-pink.png'



export default function EscortList() {
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
        margin: '0 auto',
        padding: '1.5em 0'
      }}
    >
      <div className={s.slide}>
        <img src={m1} alt="model" />
        <div className={s.model_info}>
          <div className={s.model_info_title}>
            <h5 className="text-white">Model Name</h5>
            <div>Online</div>
          </div>
          <div className={s.signs_group}>
            <div className={s.sign}>
              <img src={fav} alt="" />
            </div>
            <div className={s.sign}>
              <img src={crown} alt="" />
            </div>
            <div className={s.sign}>
              <img src={star} alt="" />
            </div>
            <div className={s.sign}>
              <img src={plane} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={s.slide}>
        <img src={m2} alt="model" />
        <div className={s.model_info}>
          <div className={s.model_info_title}>
            <h5 className="text-white">Model Name</h5>
            <div>Online</div>
          </div>
          <div className={s.signs_group}>
            <div className={s.sign}>
              <img src={crown} alt="" />
            </div>
            <div className={s.sign}>
              <img src={crown} alt="" />
            </div>
            <div className={s.sign}>
              <img src={star} alt="" />
            </div>
            <div className={s.sign}>
              <img src={plane} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={s.slide}>
        <img src={m3} alt="model" />
        <div className={s.model_info}>
          <div className={s.model_info_title}>
            <h5 className="text-white">Model Name</h5>
            <div>Online</div>
          </div>
          <div className={s.signs_group}>
            <div className={s.sign}>
              <img src={star} alt="" />
            </div>
            <div className={s.sign}>
              <img src={crown} alt="" />
            </div>
            <div className={s.sign}>
              <img src={star} alt="" />
            </div>
            <div className={s.sign}>
              <img src={plane} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={s.slide}>
        <img src={m4} alt="model" />
        <div className={s.model_info}>
          <div className={s.model_info_title}>
            <h5 className="text-white">Model Name</h5>
            <div>Online</div>
          </div>
          <div className={s.signs_group}>
            <div className={s.sign}>
              <img src={plane} alt="" />
            </div>
            <div className={s.sign}>
              <img src={crown} alt="" />
            </div>
            <div className={s.sign}>
              <img src={star} alt="" />
            </div>
            <div className={s.sign}>
              <img src={plane} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={s.slide}>
        <img src={m1} alt="model" />
        <div className={s.model_info}>
          <div className={s.model_info_title}>
            <h5 className="text-white">Model Name</h5>
            <div>Online</div>
          </div>
          <div className={s.signs_group}>
            <div className={s.sign}>
              <img src={fav} alt="" />
            </div>
            <div className={s.sign}>
              <img src={crown} alt="" />
            </div>
            <div className={s.sign}>
              <img src={star} alt="" />
            </div>
            <div className={s.sign}>
              <img src={plane} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={s.slide}>
        <img src={m2} alt="model" />
        <div className={s.model_info}>
          <div className={s.model_info_title}>
            <h5 className="text-white">Model Name</h5>
            <div>Online</div>
          </div>
          <div className={s.signs_group}>
            <div className={s.sign}>
              <img src={fav} alt="" />
            </div>
            <div className={s.sign}>
              <img src={crown} alt="" />
            </div>
            <div className={s.sign}>
              <img src={star} alt="" />
            </div>
            <div className={s.sign}>
              <img src={plane} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Slider>
  )
}
