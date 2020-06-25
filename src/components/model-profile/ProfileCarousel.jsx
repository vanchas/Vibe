import React, { useState, useEffect } from "react";
import s from "./profile.module.scss";
import $ from 'jquery';

export default function ProfileCarousel({ photo }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const autoSlide = delay => {
    setInterval(() => {
      changePhotoForvard();
    }, delay);
  }

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  const changePhotoForvard = () => {
    if (photo.length > 1) {
      if (currentIndex < photo.length - 1) {
        $('.model-photo').fadeOut(() => {
          setCurrentIndex(currentIndex + 1);
          setTimeout(() => {
            $('.model-photo').fadeIn();
          }, 100);
        })
      } else {
        $('.model-photo').fadeOut(() => {
          setCurrentIndex(0);
          setTimeout(() => {
            $('.model-photo').fadeIn();
          }, 100);
        })
      }
    }
  }
  const changePhotoBack = () => {
    if (photo.length > 1) {
      if (currentIndex > 0) {
        $('.model-photo').fadeOut(() => {
          setCurrentIndex(currentIndex - 1);
          setTimeout(() => {
            $('.model-photo').fadeIn();
          }, 100);
        })
      } else {
        $('.model-photo').fadeOut(() => {
          setCurrentIndex(photo.length - 1);
          setTimeout(() => {
            $('.model-photo').fadeIn();
          }, 100);
        })
      }
    }
  }

  return (
    <div className={s.photo_slider}>
      {photo.length > 1
        ? <span className={s.photo_toggler_back}
          onClick={changePhotoBack}>&lt;</span>
        : null}

      <div className={s.slide}>
        <img src={photo[currentIndex]} className="model-photo" alt="model" />
      </div>

      {photo.length > 1
        ? <span className={s.photo_toggler_forvard}
          onClick={changePhotoForvard}>&gt;</span>
        : null}
    </div>
  );
}
