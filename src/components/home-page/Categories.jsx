import React, { useState, useEffect } from 'react'
import s from './categories.module.scss'
import NewPosts from './NewPosts'

export default function Categories({ categories, newPosts, filterPosts }) {
  const [filterCategory, setFilterCategory] = useState('');

  const changeCategory = (category, id) => {
    setFilterCategory(category);
    filterPosts({'category_id': id});
  };

  return (
    <section className={s.categories_block}>
      <div className={`text-white ${s.categories_title}`}>
        <p>SELECT A CATEGORY</p>
      </div>
      <div className={s.categories_content}>
        <div className={`${s.categories_control}`}>
          {(categories && categories.length)
            ? categories.map((c, i) => (
              <span key={i}
                onClick={e => changeCategory(c.name.toLowerCase(), c.id)} className={`${s.category} ${filterCategory === c.name.toLowerCase() ? 'active_btn_blue' : ''}`}>{c.name.toUpperCase()}</span>
            ))
            : <><div className="spinner-border text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
              <span className="pl-2 text-info">No categories from server...</span>
            </>}

        </div>
        <div className={`text-white ${s.categories_subtitle}`}>
          <p>NEW ON THE SITE</p>
        </div>
        <div className={s.categories_carousel}>
          <NewPosts newPosts={newPosts} />
        </div>
      </div>
    </section>
  )
}
