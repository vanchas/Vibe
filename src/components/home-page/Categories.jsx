import React, { useState } from 'react'
import s from './categories.module.scss'
// import $ from 'jquery'
import CategoriesCarousel from './CategoriesCarousel'

export default function Categories() {
  const [filterCategory, setFilterCategory] = useState('escorts');

  const changeCategory = category => {
    setFilterCategory(category);
  }

  return (
    <section className={s.categories_block}>
      <div className={`text-white ${s.categories_title}`}>
        <p>SELECT A CATEGORY</p>
      </div>
      <div className={s.categories_content}>
        <div className={`${s.categories_control}`}>
          <span
            onClick={e => changeCategory("escorts")}
            className={`${s.category} ${filterCategory === 'escorts' ? 'active_btn_blue' : ''}`}>
            ESCORTS</span>
          <span
            onClick={e => changeCategory("trans")}
            className={`${s.category} ${filterCategory === 'trans' ? 'active_btn_blue' : ''}`}>
            TRANS</span>
          <span
            onClick={e => changeCategory("bdsm")}
            className={`${s.category} ${filterCategory === 'bdsm' ? 'active_btn_blue' : ''}`}>
            BDSM</span>
          <span
            onClick={e => changeCategory("tantra")}
            className={`${s.category} ${filterCategory === 'tantra' ? 'active_btn_blue' : ''}`}>
            TANTRA</span>
          <span
            onClick={e => changeCategory("massage")}
            className={`${s.category} ${filterCategory === 'massage' ? 'active_btn_blue' : ''}`}>
            MASSAGE</span>
          <span
            onClick={e => changeCategory("fetish")}
            className={`${s.category} ${filterCategory === 'fetish' ? 'active_btn_blue' : ''}`}>
            FETISH</span>
          <span
            onClick={e => changeCategory("dancers")}
            className={`${s.category} ${filterCategory === 'dancers' ? 'active_btn_blue' : ''}`}>
            DANCERS</span>
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
