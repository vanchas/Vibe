import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Slider from "react-slick"
import s from './escort.module.scss'
import fav from '../../assets/images/main/signs/favorite-pink.png'
import plane from '../../assets/images/main/signs/plane-pink.png'
import star from '../../assets/images/main/signs/star-pink.png'
import crown from '../../assets/images/main/signs/crown-pink.png'



export default function EscortList({models}) {
  const [loaded, setLoaded] = useState(false);

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 8000,
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

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div style={{
      maxWidth: '1260px',
      padding: '1.5em 0 5em 0',
      margin: '0 auto'
    }}>
      {loaded &&
        <Slider {...settings} >
          {models.map((m, i) => {
            return <div key={i} className={s.slide}>
              <Link href="/modelProfile"><a>
                <img src={m} alt="model" className="mx-auto w-100" />
                <div className={s.model_info}>
                  <div className={s.model_info_title}>
                    <h5 className="text-white">Model Name</h5>
                    <div>Online</div>
                  </div>
                  <div className={s.signs_group}>
                    <div className={s.sign}>
                      <img src={fav} alt="model" />
                    </div>
                    <div className={s.sign}>
                      <img src={crown} alt="model" />
                    </div>
                    <div className={s.sign}>
                      <img src={star} alt="model" />
                    </div>
                    <div className={s.sign}>
                      <img src={plane} alt="model" />
                    </div>
                  </div>
                </div>
              </a></Link>
            </div>
          })}
        </Slider>}
    </div>
  )
}
