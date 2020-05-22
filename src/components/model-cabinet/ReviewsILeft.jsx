import React from 'react'
import s from "./reviews.module.scss";

export default function ReviewsILeft() {
  return (
    <div className={s.comment}>
      <div className={s.comment_title}>
        <span>USERNAME</span>
        <span>22.07.19</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <span className={s.add_btn}>TO AD</span>
    </div>
  )
}
