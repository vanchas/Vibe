import React, { useState, useEffect } from "react";
import Link from 'next/link';
import s from "./horizontal.module.scss";
import fav from "../../assets/images/main/signs/favorite-yel.png";
import crown from "../../assets/images/main/signs/crown-yel.png";
import star from "../../assets/images/main/signs/star-yel.png";
import plane from "../../assets/images/main/signs/plane-yel.png";
import $ from 'jquery';

export default function LocHorCarousel({ posts, addToFavorites }) {
  const [firstCurrentIndex, setFirstCurrentIndex] = useState(0);
  const [secondCurrentIndex, setSecondCurrentIndex] = useState(1);

  const autoSlide = delay => {
    setInterval(() => {
      changePhotoForvard();
    }, delay);
  }

  useEffect(() => {
    setFirstCurrentIndex(0);
  }, []);

  const changePhotoForvard = () => {
    if (posts.length > 1) {
      if (firstCurrentIndex < posts.length - 1) {
        $('.model-photo').fadeOut(() => {
          setFirstCurrentIndex(firstCurrentIndex + 1);
          setTimeout(() => {
            $('.model-photo').fadeIn();
          }, 100);
        })
      } else {
        $('.model-photo').fadeOut(() => {
          setFirstCurrentIndex(0);
          setTimeout(() => {
            $('.model-photo').fadeIn();
          }, 100);
        })
      }
      if (secondCurrentIndex < posts.length - 1) {
        $('.model-photo-second').fadeOut(() => {
          setSecondCurrentIndex(secondCurrentIndex + 1);
          setTimeout(() => {
            $('.model-photo-second').fadeIn();
          }, 100);
        })
      } else {
        $('.model-photo-second').fadeOut(() => {
          setSecondCurrentIndex(0);
          setTimeout(() => {
            $('.model-photo-second').fadeIn();
          }, 100);
        })
      }
    }
  }
  const changePhotoBack = () => {
    if (posts.length > 1) {
      if (firstCurrentIndex > 0) {
        $('.model-photo').fadeOut(() => {
          setFirstCurrentIndex(firstCurrentIndex - 1);
          setTimeout(() => {
            $('.model-photo').fadeIn();
          }, 100);
        })
      } else {
        $('.model-photo').fadeOut(() => {
          setFirstCurrentIndex(posts.length - 1);
          setTimeout(() => {
            $('.model-photo').fadeIn();
          }, 100);
        })
      }
      if (secondCurrentIndex > 0) {
        $('.model-photo-second').fadeOut(() => {
          setSecondCurrentIndex(secondCurrentIndex - 1);
          setTimeout(() => {
            $('.model-photo-second').fadeIn();
          }, 100);
        })
      } else {
        $('.model-photo-second').fadeOut(() => {
          setSecondCurrentIndex(posts.length - 1);
          setTimeout(() => {
            $('.model-photo-second').fadeIn();
          }, 100);
        })
      }
    }
  }

  return (
    <div>
      <div className={s.loc_hor_carousel_header}>
        <h5 className="text-white">Paid Announcements</h5>
      </div>

      {posts && posts.length ?
        <div className={s.photo_slider} style={posts.length === 1 ? { gridTemplateColumns: '1fr' } : {}}>
          {posts.length > 1
            ? <span className={s.photo_toggler_back}
              onClick={changePhotoBack}>&lt;</span>
            : null}

          <div className={s.slide}>
            <Link href={{ pathname: "/modelProfile", query: { id: posts[firstCurrentIndex].id } }}><a>
              <img
                src={posts[firstCurrentIndex].photo_horizontal}
                alt={posts[firstCurrentIndex].model_name}
                className={`model-photo ${s.main_photo}`} />
              <div className={s.loc_slide_info}>
                <div className={s.loc_slide_info_head}>
                  <h5 className="text-white">{posts[firstCurrentIndex].model_name} {posts[firstCurrentIndex].second_name}</h5>
                  <div className={s.slide_network}>{posts[firstCurrentIndex].status}</div>
                  <div className={s.slide_control}>
                    <img src={fav} alt="" onClick={(e) => {
                      e.preventDefault();
                      addToFavorites(posts[firstCurrentIndex].id);
                    }} />
                    <img src={crown} alt="" />
                    <img src={star} alt="" />
                    <img src={plane} alt="" />
                  </div>
                </div>
                <div className={s.slide_location}>
                  <p className="m-0">{posts[firstCurrentIndex].state.name} / {posts[firstCurrentIndex].city.name}</p>
                </div>
                <div className={s.slide_verification}>
                  <span className={s.verification}>{posts[firstCurrentIndex].is_verify ? 'OTHER VIP VERIFIED' : null}</span>
                  <span className={`text-white ${s.status}`}>SPECIAL STATUS</span>
                </div>
              </div>
            </a></Link>
          </div>

          {posts.length > 1
            ? <span className={s.photo_toggler_forvard}
              onClick={changePhotoForvard}>&gt;</span>
            : null}
        </div>
        : <div className="py-5 text-center h3 text-info">No posts...
          {/* <div className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div> */}
        </div>}

      {/* {posts.map((post, i) => {
        return <div key={i}>
          <Link href={{ pathname: "/modelProfile", query: { id: posst[firstCurrentIndex].id } }}><a>
            <div className={s.loc_hor_carousel_slide}>
              <img src={posts[firstCurrentIndex].photo_horizontal} alt="model" className="w-100" />
              <div className={s.loc_slide_info}>
                <div className={s.loc_slide_info_head}>
                  <h5 className="text-white">{posts[firstCurrentIndex].model_name} {posts[firstCurrentIndex].second_name}</h5>
                  <div className={s.slide_network}>{posts[firstCurrentIndex].status}</div>
                  <div className={s.slide_control}>
                    <img src={fav} alt="" onClick={(e) => {
                      e.preventDefault();
                      addToFavorites(posts[firstCurrentIndex].id);
                    }} />
                    <img src={crown} alt="" />
                    <img src={star} alt="" />
                    <img src={plane} alt="" />
                  </div>
                </div>
                <div className={s.slide_location}>
                  <p className="m-0">{posts[firstCurrentIndex].state.name} / {posts[firstCurrentIndex].city.name}</p>
                </div>
                <div className={s.slide_verification}>
                  <span className={s.verification}>{posts[firstCurrentIndex].is_verify ? 'OTHER VIP VERIFIED' : null}</span>
                  <span className={`text-white ${s.status}`}>SPECIAL STATUS</span>
                </div>
              </div>
            </div>
          </a></Link>
        </div>
      })} */}
    </div>
  );
}
