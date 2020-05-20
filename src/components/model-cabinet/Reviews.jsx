import React from "react";
import s from "./reviews.module.scss";

export default function Reviews() {
  return (
    <div>
      <div className={s.reviews_control}>
        <div>REVIEWS ABOUT ME</div>
        <div>REVIEWS I LEFT BEHIND</div>
        <div></div>
      </div>

      <div className={s.comments_block}>
        {[1, 2, 3, 4, 5].map((com, i) => {
          return (
            <div key={i} className={s.comment}>
              <div className={s.comment_title}>
                <span>USERNAME</span>
                <span>22.07.19</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <span className={s.add_btn}>TO AD</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
