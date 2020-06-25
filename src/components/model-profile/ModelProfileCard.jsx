import React, { useState, useEffect } from "react";
import s from "./profile.module.scss";
import ProfileCarousel from "./ProfileCarousel";
import ProfileVideo from "./ProfileVideo";
import fav from "../../assets/images/main/signs/favorite-pink.png";
import crown from "../../assets/images/main/signs/crown-pink.png";
import star from "../../assets/images/main/signs/star-pink.png";
import plane from "../../assets/images/main/signs/plane-pink.png";
import ReportFakePhotosModalWindow from "./ReportFakePhotos";
import ReportTraffickingModalWindow from "./ReportTrafficking";
import { useRouter } from "next/router";

export default function postProfileCard({ posts, postComments, createPostComment, reportPost, alert, showAlert, addToFavorites }) {
  const [commentText, setComment] = useState('');
  const [post, setPost] = useState({});
  const router = useRouter();

  useEffect(() => {
    for (let p of posts) {
      if (p.id == router.query.id) {
        setPost(p);
      }
    }
  }, [posts]);

  return (
    <div className={s.profile}>
      {post.category ? <>
        <div className={s.card}>
          <div className={s.image_block}>
            <ProfileCarousel photo={[post.photo_horizontal, post.photo_vertical]} />
            <div>
              <ProfileVideo videoLink={post.video_link} />
            </div>
            <div className={s.report_btn_group}>
              <ReportFakePhotosModalWindow
                reportPost={reportPost}
                buttonLabel={'Report Fake Photos'}
                className={``}
                postId={post.postId}
                alert={alert}
                showAlert={showAlert}
              />
              <ReportTraffickingModalWindow buttonLabel={'Report Trafficking'} className={``} />
            </div>
            <div className={`${s.favorite_btn} text-white`}
              onClick={() => addToFavorites(post.id)}>
              Add to favourites
          </div>
          </div>
          <div className={`text-white ${s.content_block}`}>
            <div className={s.content_block_header}>
              <h5>{post.first_name} {post.second_name}</h5>
              <span>{post.status}</span>
              <div>
                <img src={fav} alt="" onClick={() => addToFavorites(post.id)} />
                <img src={crown} alt="" />
                <img src={star} alt="" />
                <img src={plane} alt="" />
              </div>
            </div>
            <div className={s.content_block_description}>
              <h6>Summary</h6>
              <p>{post.summary}</p>
            </div>
            <div className={s.contacts_blue_block}>
              <div>{post.is_verify ? 'VERIFIED VIP OTHER' : null}</div>
              <div>
                {post.email ?
                  <a href={`mailto:${post.email}`}>
                    {post.email}</a>
                  : 'No access to see email...'}
                {post.number ?
                  <a href={`tel:+${post.number}`}>
                    +{post.number}</a>
                  : 'No access to see number...'}
              </div>
            </div>
            <div className={s.main_content_block}>
              <div className={s.text_block}>
                <div className={s.text_block_title}>About</div>
                <p>{post.about}</p>
              </div>
              <div className={s.details_block}>
                <div className="mb-1">DETAILS</div>
                <div>
                  <dl>
                    <dt>Category:</dt>
                    <dd>{post.category.name}</dd>
                    <dt>Gender:</dt>
                    <dd>{post.gender}</dd>
                    <dt>Age:</dt>
                    <dd>{post.age}</dd>
                    <dt>Ethnicity:</dt>
                    <dd>{post.ethnicity.value}</dd>
                    <dt>Hair Color:</dt>
                    <dd>{post.hair.value}</dd>
                    <dt>Eye Color:</dt>
                    <dd>{post.eye.value}</dd>
                    <dt>Height:</dt>
                    <dd>{post.height}</dd>
                    <dt>Affiliation:</dt>
                    <dd>{post.affiliation.value}</dd>
                    <dt>Available To:</dt>
                    <dd>{post.availableto.map(a => a.value + ' ')}</dd>
                    <dl>Availability:</dl>
                    <dd>{post.availability.map(a => a.value + ' ')}</dd>
                  </dl>
                </div>
                <div>CONTACT DETAILS</div>
                {post.number ?
                  <a href={`tel:+${post.number}`}>
                    +{post.number}</a>
                  : 'No access to see number...'}
                {post.email ?
                  <a href={`mailto:${post.email}`}>
                    {post.email}</a>
                  : 'No access to see email...'}
              </div>
            </div>
          </div>
        </div>

        {postComments && postComments.length ? <>
          <div className={s.add_comment_block}>
            <div className="text-white"
              onClick={async () => {
                if (commentText.length) {
                  await createPostComment(router.query.id, commentText);
                  setComment('');
                }
              }}>
              LEAVE A COMMENT</div>
            <textarea onChange={e => setComment(e.target.value)} rows="8"></textarea>
          </div>

          <div className={s.comments_block}>
            <div className={`${s.comments_block_title} text-white`}>COMMENTS</div>
            <ul className="list-group p-0">
              {postComments.map((c, i) => (
                <li key={i} className={s.comment}>
                  <div className={s.comment_title}>
                    <span>{c.user.name}</span>
                    <span>{c.created_at.split('T')[0].split('-').join(' . ')}</span>
                  </div>
                  <p>{c.comment}</p>
                </li>
              ))}
            </ul>
          </div> </> : null}

      </> : <div className="text-center py-5">
          <div className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>}
    </div>
  );
}
