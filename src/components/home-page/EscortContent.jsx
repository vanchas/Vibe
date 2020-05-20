import React, { useState, useEffect } from 'react'
import s from './escort.module.scss'
import EscortList from './EscortList'
import EscortGrid from './EscortGrid'
import $ from 'jquery'

export default function EscortContent() {
  const [showCarouselList, setShowCarouselList] = useState(true);

  const showGridCarousel = () => {
    setShowCarouselList(false);
    $('.grid_btn').addClass('active');
    $('.list_btn').removeClass('active');
  }
  const showListCarousel = () => {
    setShowCarouselList(true);
    $('.grid_btn').removeClass('active');
    $('.list_btn').addClass('active');
  }

  return (
    <section className={s.escort_content_block}>
      <div className={`text-white ${s.escort_content_title}`}>
        <p>Meet our selection of worldwide escorts</p>
      </div>
      <div className={`${s.filter_sort_control}`}>
        <div className={s.filter_btn_wrap}>
          <div className={s.filter_btn_group}>
            <span className={s.filter_btn}>FILTER</span>
            <span className={s.sorting_btn}>SORTING</span>
          </div>
          <div className={s.filter_btn_group}>
            <span className={`grid_btn ${s.grid_btn}`}
              onClick={showGridCarousel}>
              GRID</span>
            <span className={`list_btn ${s.list_btn}`}
              onClick={showListCarousel}>LIST</span>
          </div>
        </div>
      </div>
      {showCarouselList ?
        <EscortList />
        : <EscortGrid />}

    </section>
  )
}
