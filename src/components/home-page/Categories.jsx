import React, { useState, useEffect } from 'react'
import s from './categories.module.scss'
import CategoriesCarousel from './CategoriesCarousel'

export default function Categories({ categories }) {
  const [filterCategory, setFilterCategory] = useState('escorts');

  const changeCategory = category => {
    setFilterCategory(category);
  };

  // useEffect(() => {
  //   console.log(categories);
  // }, []);

  return (
    <section className={s.categories_block}>
      <div className={`text-white ${s.categories_title}`}>
        <p>SELECT A CATEGORY</p>
      </div>
      <div className={s.categories_content}>
        <div className={`${s.categories_control}`}>
          {(categories && categories.length) ? categories.map((c, i) => (
            <span key={i}
              onClick={e => changeCategory(c.name.toLowerCase())} className={`${s.category} ${filterCategory === c.name.toLowerCase() ? 'active_btn_blue' : ''}`}>{c.name.toUpperCase()}</span>
          )) : null}
        </div>
        <div className={`text-white ${s.categories_subtitle}`}>
          <p>NEW ON THE SITE</p>
        </div>
        <div className={s.categories_carousel}>
          <CategoriesCarousel />
        </div>
      </div>
    </section>
  )
}
