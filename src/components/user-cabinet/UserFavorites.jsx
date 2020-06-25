import React, { useEffect } from 'react'
import s from './user-edit.module.scss'
import EscortList from "../home-page/EscortList";

export default function UserFavorites({
  getFavoritesUser,
  selectPostsPage,
  addToFavorites,
  posts,
  pagesNumber
}) {
  useEffect(() => {
    getFavoritesUser();
  }, []);

  return (
    <div className={s.favorites_list_block}>
      <div className={s.favorites_list_block_heading}><h5>YOUR FAVORITES</h5></div>
      <EscortList
        posts={posts}
        pagesNumber={pagesNumber}
        selectPostsPage={selectPostsPage}
        addToFavorites={addToFavorites}
      />
    </div>
  )
}
