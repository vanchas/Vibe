import React, { useState } from "react";
import s from "./reviews.module.scss";
import ReviewsAboutMe from "./ReviewsAboutMe";
import ReviewsILeft from "./ReviewsILeft";
import $ from 'jquery';

export default function Reviews() {
  const [visibleComponent, setVisibleComponent] = useState('about me');

  const changeVisibleComponent = e => {
    setVisibleComponent($(e.target).attr('name'));
    for (let btn of $('.reviews_control_btn')) {
      if ($(btn).not($(e.target)).hasClass('reviews_control_btn')) {
        $(btn).removeClass('active_btn_blue');
      }
    }
    $(e.target).addClass('active_btn_blue');
  }

  return (
    <div>
      <div className={s.reviews_control}>
        <div name="about me" className="reviews_control_btn active_btn_blue"
          onClick={e => changeVisibleComponent(e)} >
          REVIEWS ABOUT ME</div>
        <div name="i left" className="reviews_control_btn"
          onClick={e => changeVisibleComponent(e)}>
          REVIEWS I LEFT BEHIND</div>
        <div></div>
      </div>

      <div className={s.comments_block}>
        {[1, 2, 3, 4, 5].map((com, i) => {
          return (
            (visibleComponent === 'about me') ?
              <ReviewsAboutMe key={i} /> :
              <ReviewsILeft key={i} />
          )
        })}
      </div>
    </div>
  );
}
