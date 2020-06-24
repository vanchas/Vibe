import React, { useEffect, useState } from 'react'
import Link from 'next/link'
// import Slider from "react-slick"
import s from './escort.module.scss'
import fav from '../../assets/images/main/signs/favorite-pink.png'
import plane from '../../assets/images/main/signs/plane-pink.png'
import star from '../../assets/images/main/signs/star-pink.png'
import crown from '../../assets/images/main/signs/crown-pink.png'

import model from '../../assets/images/main/horizontal/model-1.png'

export default function EscortList({ posts, pagesNumber, selectPostsPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([1]);

  useEffect(() => {
    setPages([1]);
    for (let i = 0; i < pagesNumber; i++) {
      pages.push(1);
    }
  }, []);

  const settings = {
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

  return (
    <div style={{
      maxWidth: '1260px',
      padding: '1.5em 0 5em 0',
      margin: '0 auto'
    }}>
      {(posts && posts.length) ? <>
        {/* <Slider {...settings} > */}
        <ul className={`${s.escort_list}`}>
          {posts.map((post, i) => {
            return <li key={i} className={s.slide}>
              <Link href={{pathname: "/modelProfile", query: {id: post.id}}}><a>
                <div className={s.model_photo}>
                  <img src={post.photo_vertical} alt={post.model_name} />
                </div>
                <div className={s.model_info}>
                  <div className={s.model_info_title}>
                    <h5 className="text-white">{post.model_name}</h5>
                    <div style={{ textTransform: 'capitalize' }}>{post.status}</div>
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
            </li>
          })}
        </ul>
        {/* </Slider> */}
        <nav aria-label="Page navigation example" className="pt-4">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link bg-dark text-white border-secondary" href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) {
                    selectPostsPage(currentPage - 1);
                    setCurrentPage(currentPage - 1);
                  }
                }}>
                Previous
            </a>
            </li>
            {pages.map((p, i) => (
              <li key={i} className="page-item">
                <a className="page-link bg-dark text-white border-secondary" href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    selectPostsPage(i + 1);
                    setCurrentPage(i + 1);
                  }}>{i + 1}</a>
              </li>
            ))}
            <li className="page-item">
              <a className="page-link bg-dark text-white border-secondary" href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < pagesNumber) {
                    selectPostsPage(currentPage + 1);
                    setCurrentPage(currentPage + 1);
                  }
                }}>
                Next
            </a>
            </li>
          </ul>
        </nav>
      </>
        : <div className="h1 text-info text-center py-5">No posts...</div>}
    </div>
  )
}

// about: "aboutaboutaboutaboutaboutaboutaboutaboutaboutaboutabout"
    // account_name: "account_nameaccount_nameaccount_nameaccount_name"
    // affiliation_id: null
    // age: 22
    // available_to_date: null
    // category_id: null
    // city_id: null
    // created_at: "2020-06-19T10:35:00.000000Z"
    // ethnicity_id: null
    // eye_id: null
    // gender: "man"
    // hair_id: null
    // height: "235"
    // id: 1
    // is_more_photos: 0
    // is_photos_vip: 0
    // is_published: 0
    // is_verify: 0
    // is_vip: 0
    // model_name: "Shluha"
    // photo: null
    // second_name: "second"
    // state_id: null
    // status: "other"
    // summary: "summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary"
    // updated_at: "2020-06-22T06:34:12.000000Z"
    // user_id: null
    // video_link: "https://www.youtube.com/watch?v=TQgGFwVWD24&list=RD-9Rng8OuM10&index=2"
    // vip_to_date: null