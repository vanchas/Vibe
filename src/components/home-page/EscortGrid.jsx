import React from 'react';
import s from './escort.module.scss';
import Slider from "react-slick";
import m1 from '../../assets/images/main/vertical/model-1.png';
import m2 from '../../assets/images/main/vertical/model-2.png';
import fav from '../../assets/images/main/signs/favorite-pink.png';
import crown from '../../assets/images/main/signs/crown-pink.png';
import star from '../../assets/images/main/signs/star-pink.png';
import plane from '../../assets/images/main/signs/plane-pink.png';


export default function EscortGrid() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4,
    arrows: false,
    dots: false,
    rows: 4
  };

  return (
    <div style={{
      maxWidth: '1260px',
      margin: '1em auto'
    }} >
      <Slider {...settings}>
        <div>
          <div className={s.vertical_slide}>
            <div className={s.vertical_slide_image}>
              <img src={m1} alt="model" className="w-100" />
            </div>
            <div className={s.vertical_slide_model_info}>
              <div>
                <h5 className={`text-white ${s.name}`}>Model Name</h5>
                <div className={s.network_status}>Online</div>
                <div className={`text-white ${s.location}`}>Location</div>
                <p className={`text-white ${s.summary}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo</p>
              </div>
              <div className={s.card_control}>
                <div>
                  <img src={fav} alt="" />
                </div>
                <div>
                  <img src={crown} alt="" />
                </div>
                <div>
                  <img src={star} alt="" />
                </div>
                <div>
                  <img src={plane} alt="" />
                </div>
              </div>
              <div className={`text-white ${s.verification}`}>
                <span className={s.verified}>VERIFIED <i></i></span>
                <span className={s.view_profile}>VIEW PROFILE</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={s.vertical_slide}>
            <div className={s.vertical_slide_image}>
              <img src={m2} alt="model" className="w-100" />
            </div>
            <div className={s.vertical_slide_model_info}>
              <div>
                <h5 className={`text-white ${s.name}`}>Model Name</h5>
                <div className={s.network_status}>Online</div>
                <div className={`text-white ${s.location}`}>Location</div>
                <p className={`text-white ${s.summary}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo</p>
              </div>
              <div className={s.card_control}>
                <div>
                  <img src={fav} alt="" />
                </div>
                <div>
                  <img src={crown} alt="" />
                </div>
                <div>
                  <img src={star} alt="" />
                </div>
                <div>
                  <img src={plane} alt="" />
                </div>
              </div>
              <div className={`text-white ${s.verification}`}>
                <span className={s.verified}>VERIFIED <i></i></span>
                <span className={s.view_profile}>VIEW PROFILE</span>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}
