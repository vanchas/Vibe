import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";
import s from "./categories.module.scss";

export default function SimpleSlider({ newPosts }) {
  const settings = {
    infinite: true,
    speed: 500,
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
          slidesToScroll: 1,
          fade: true
        }
      }
    ]
  };

  return (
    <div style={{
      margin: '0 auto',
      maxWidth: '1260px'
    }}>
      <Slider
        {...settings}
        style={{
          maxWidth: "1260px",
          margin: "0 auto",
        }}
      >
        {newPosts && newPosts.length
          ? newPosts.map((post, i) => (
            <div key={i}>
              <div className={s.slide}>
                <Link href={{ pathname: "/modelProfile", query: { id: post.id } }}>
                  <a>
                    <img src={post.photo_vertical} alt="model" className="w-100" />
                    <div>
                      <span>{post.model_name}</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          )) : null}
      </Slider>
    </div>
  );
}
