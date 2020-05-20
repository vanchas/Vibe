import React from 'react'
import s from './categories.module.scss'
import CategoriesCarousel from './CategoriesCarousel'

export default function Categories() {
  return (
    <section className={s.categories_block}>
      <div className={`text-white ${s.categories_title}`}>
        <p>SELECT A CATEGORY</p>
      </div>
      <div className={s.categories_content}>
        <div className={`${s.categories_control}`}>
          <span className={`${s.active} ${s.category}`}>
            ESCORTS</span>
          <span className={s.category}>
            TRANS</span>
          <span className={s.category}>
            BDSM</span>
          <span className={s.category}>
            TANTRA</span>
          <span className={s.category}>
            MASSAGE</span>
          <span className={s.category}>
            FETISH</span>
          <span className={s.category}>
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
