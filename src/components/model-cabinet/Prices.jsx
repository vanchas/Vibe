import React from 'react'
import Slider from "react-slick";
import s from './prices.module.scss'

export default function Prices() {
  var settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    // pauseOnFocus: true,
    // pauseOnHover: true,
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false
        }
      }
    ]
  };

  return (
    <div className={s.prices_wrap}>
      <Slider
        {...settings}
        style={{
          maxWidth: "1260px",
          margin: "0 auto",
        }}
      >
        <div className={`${s.slide} ${s.slide_1}`}>
          <div className={`text-white ${s.price_item}`}>
            <span className={s.price_title}>FREE</span>
            <span className={s.price}><i>$ </i> 0</span>
            <span className={s.per_month}>&nbsp;</span>
            <span className={s.price_subtitle}>
              Your current plan
            </span>
          </div>
          <div className={`${s.price_desc_item} ${s.price_desc_item_1}`}>
            <div className={s.price_desc_item_title}>Free includes :</div>
            <p className={s.description_text_item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>

        <div className={`${s.slide} ${s.slide_2}`}>
          <div className={`text-white ${s.price_item}`}>
            <span className={s.price_title}>STANDARD</span>
            <span className={s.price}><i>$ </i> 49</span>
            <span className={s.per_month}>PERMONTH</span>
            <span className={s.price_subtitle}>
              UPGRADE NOW
                     </span>
          </div>
          <div className={`${s.price_desc_item} ${s.price_desc_item_2}`}>
            <div className={s.price_desc_item_title}>Free includes :</div>
            <p className={s.description_text_item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                     </p>
            <p className={s.description_text_item}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in corporis porro facere ut delectus, ducimus maxime odit quaerat, labore natus vitae, voluptas atque dolorum tempora exercitationem quo magni accusantium.
                     </p>
          </div>
        </div>

        <div className={`${s.slide} ${s.slide_3}`}>
          <div className={`text-white ${s.price_item}`}>
            <span className={s.price_title}>PLUS</span>
            <span className={s.price}><i>$ </i> 99</span>
            <span className={s.per_month}>PER MONTH</span>
            <span className={s.price_subtitle}>
              UPGRADE NOW
                     </span>
          </div>
          <div className={`${s.price_desc_item} ${s.price_desc_item_3}`}>
            <div className={s.price_desc_item_title}>Free includes :</div>
            <p className={s.description_text_item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                     </p>
            <p className={s.description_text_item}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, dolores? Reprehenderit velit consequatur neque hic quisquam unde consequuntur. Incidunt est id cumque unde maxime, vel inventore optio facere excepturi! Soluta?
                     </p>
            <p className={s.description_text_item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                     </p>
          </div>
        </div>

        <div className={`${s.slide} ${s.slide_4}`}>
          <div className={`text-white ${s.price_item}`}>
            <span className={s.price_title}>VIP</span>
            <span className={s.price}><i>$ </i> 299</span>
            <span className={s.per_month}>PER MONTH</span>
            <span className={s.price_subtitle}>
              UPGRADE NOW
                     </span>
          </div>
          <div className={`${s.price_desc_item} ${s.price_desc_item_4}`}>
            <div className={s.price_desc_item_title}>Free includes :</div>
            <p className={s.description_text_item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                     </p>
            <p className={s.description_text_item}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, dolores? Reprehenderit velit consequatur neque hic quisquam unde consequuntur. Incidunt est id cumque unde maxime, vel inventore optio facere excepturi! Soluta?
                     </p>
            <p className={s.description_text_item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                     </p>
            <p className={s.description_text_item}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, dolores? Reprehenderit velit consequatur neque hic quisquam unde consequuntur. Incidunt est id cumque unde maxime, vel inventore optio facere excepturi! Soluta?
                     </p>
          </div>
        </div>
      </Slider>
    </div>
  )
}
