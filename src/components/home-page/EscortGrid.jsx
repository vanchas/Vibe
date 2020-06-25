import React, { useState, useEffect } from "react";
import s from "./escort.module.scss";
import Link from "next/link";
import fav from "../../assets/images/main/signs/favorite-pink.png";
import crown from "../../assets/images/main/signs/crown-pink.png";
import star from "../../assets/images/main/signs/star-pink.png";
import plane from "../../assets/images/main/signs/plane-pink.png";
import VerifiedWindow from "../modal-window/VerifiedWindow";

import model from "../../assets/images/main/horizontal/model-1.png";

export default function EscortGrid({ posts, pagesNumber, selectPostsPage, addToFavorites }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([1]);

  useEffect(() => {
    setPages([1]);
    for (let i = 0; i < pagesNumber; i++) {
      pages.push(1);
    }
  }, []);

  return (
    <div
      style={{
        maxWidth: "1260px",
        margin: "1em auto",
        padding: "0 0 5em 0",
      }}
    >
      {posts && posts.length ? (
        <>
          <ul className="list-group p-0">
            {posts.map((post, i) => {
              return (
                <li key={i}>
                  <div className={s.vertical_slide}>
                    <div className={s.vertical_slide_image}>
                      <img
                        src={post.photo_horizontal}
                        alt={post.model_name}
                        className={s.model_photo_grid}
                      />
                    </div>
                    <div className={s.vertical_slide_model_info}>
                      <div>
                        <h5 className={`text-white ${s.name}`}>
                          {post.model_name}
                        </h5>
                        <div className={s.network_status}
                          style={{ textTransform: 'capitalize' }}>
                          {post.status}
                        </div>
                        <div className={`text-white ${s.location}`}>
                          Location
												</div>
                        <p className={`text-white ${s.summary}`}>
                          {post.summary}
                        </p>
                      </div>
                      <div className={s.card_control}>
                        <div>
                          <img src={fav} alt="" onClick={(e) => {
                            e.preventDefault();
                            addToFavorites(post.id);
                          }} />
                        </div>
                        <div>
                          <img src={crown} alt="" />
                        </div>
                        <div>
                          <img src={star} alt="" />
                        </div>
                        <div>
                          <img src={plane} alt="" />
                        </div>
                      </div>
                      <div className={`text-white ${s.verification}`}>
                        <span className={s.verified}>
                          <VerifiedWindow buttonLabel={`VERIFIED`} />
                          <i></i>
                        </span>
                        <span className={s.view_profile}>
                          <Link href={{ pathname: "/modelProfile", query: { id: post.id } }}>
                            <a className="btn text-white">VIEW PROFILE</a>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <nav aria-label="Page navigation example">
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
      ) : (
          <div className="h1 text-info text-center py-5">No posts...</div>
        )
      }
    </div >
  );
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
