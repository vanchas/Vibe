import React, { useState } from 'react'
import s from './categories.module.scss'
import $ from 'jquery'
import CategoriesCarousel from './CategoriesCarousel'

export default function Categories() {
  const [filterCategory, setFilterCategory] = useState('escorts');

  const activateBtn = e => {
    setFilterCategory($(e.target).attr('name'));
    for (let btn of $('.category_control_btn')) {
      if ($(btn).not($(e.target)).hasClass('category_control_btn')) {
        $(btn).removeClass('active_btn_blue');
      }
    }
    $(e.target).addClass('active_btn_blue');
  }

  return (
    <section className={s.categories_block}>
      <div className={`text-white ${s.categories_title}`}>
        <p>SELECT A CATEGORY</p>
      </div>
      <div className={s.categories_content}>
        <div className={`${s.categories_control}`}>
          <span name="escorts"
            onClick={e => activateBtn(e)}
            className={`active_btn_blue category_control_btn ${s.category}`}>
            ESCORTS</span>
          <span name="trans"
            onClick={e => activateBtn(e)}
            className={`category_control_btn ${s.category}`}>
            TRANS</span>
          <span name="bdsm"
            onClick={e => activateBtn(e)}
            className={`category_control_btn ${s.category}`}>
            BDSM</span>
          <span name="tantra"
            onClick={e => activateBtn(e)}
            className={`category_control_btn ${s.category}`}>
            TANTRA</span>
          <span name="massage"
            onClick={e => activateBtn(e)}
            className={`category_control_btn ${s.category}`}>
            MASSAGE</span>
          <span name="fetish"
            onClick={e => activateBtn(e)}
            className={`category_control_btn ${s.category}`}>
            FETISH</span>
          <span name="dancers"
            onClick={e => activateBtn(e)}
            className={`category_control_btn ${s.category}`}>
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
