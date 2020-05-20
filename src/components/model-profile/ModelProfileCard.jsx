import React from "react";
import s from "./profile.module.scss";
import ProfileCarousel from "./ProfileCarousel";
import ProfileVideo from "./ProfileVideo";
import fav from "../../assets/images/main/signs/favorite-pink.png";
import crown from "../../assets/images/main/signs/crown-pink.png";
import star from "../../assets/images/main/signs/star-pink.png";
import plane from "../../assets/images/main/signs/plane-pink.png";

export default function ModelProfileCard() {
  return (
    <div className={s.profile}>
      <div className={s.card}>
        <div className={s.image_block}>
          <div className={`${s.images_track}`}>
            <ProfileCarousel />
          </div>
          <div>
            <ProfileVideo />
          </div>
          <div className={`${s.report_btn} text-white`}>
            Report Fake Photos &nbsp;&nbsp; Report Trafficking
          </div>
          <div className={`${s.favorite_btn} text-white`}>
            Add to favourites
          </div>
        </div>
        <div className={`text-white ${s.content_block}`}>
          <div className={s.content_block_header}>
            <h5>Model Name</h5>
            <span>Online</span>
            <div>
              <img src={fav} alt="" />
              <img src={crown} alt="" />
              <img src={star} alt="" />
              <img src={plane} alt="" />
            </div>
          </div>
          <div className={s.content_block_description}>
            <h6>Optional text</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
          <div className={s.contacts_blue_block}>
            <div>VERIFIED VIP OTHER</div>
            <div>
              <a href="mailto:mail@address.com">mail@address.com</a>
              <a href="tel:+1234567890">+ 123 45 67 890</a>
            </div>
          </div>
          <div className={s.main_content_block}>
            <div className={s.text_block}>
              <div className={s.text_block_title}>About</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={s.details_block}>
              <div className="mb-1">DETAILS</div>
              <div>
                <dl>
                  <dt>Gender:</dt>
                  <dd>Female</dd>
                  <dt>Age:</dt>
                  <dd>26</dd>
                  <dt>Ethnicity:</dt>
                  <dd>Asian</dd>
                  <dt>Hair Color:</dt>
                  <dd>Blonde</dd>
                  <dt>Eye Color:</dt>
                  <dd>Brown</dd>
                  <dt>Height:</dt>
                  <dd>5'2"</dd>
                  <dt>Affiliation:</dt>
                  <dd>Independent</dd>
                  <dt>Available To:</dt>
                  <dd>Couples, Men</dd>
                  <dl>Availability:</dl>
                  <dd>Incall / Outcall</dd>
                </dl>
              </div>
              <div>CONTACT DETAILS</div>
              <a href="tel:+1234567890">+ 123 45 67 890</a>
              <a href="mailto:mail@address.com">mail@address.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className={s.add_comment_block}>
        <div className="text-white">LEAVE A COMMENT</div>
        <textarea rows="8"></textarea>
      </div>

      <div className={s.comments_block}>
        <div className={`${s.comments_block_title} text-white`}>COMMENTS</div>
        <div className={s.comment}>
          <div className={s.comment_title}>
            <span>USERNAME</span>
            <span>22.07.19</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
      </div>
    </div>
  );
}
