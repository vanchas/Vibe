import React, { useState, useEffect } from 'react'
import s from './escort.module.scss'
import EscortList from './EscortList'
import EscortGrid from './EscortGrid'
import $ from 'jquery'
import m1 from '../../assets/images/main/vertical/model-1.png';
import m2 from '../../assets/images/main/vertical/model-2.png';


export default function EscortContent() {
  const [visibleComponent, setVisibleComponent] = useState('list');

  const changeVisibleComponent = e => {
    setVisibleComponent($(e.target).attr('name'));
    for (let btn of $('.carousel_layout_change_btn')) {
      if ($(btn).not($(e.target)).hasClass('carousel_layout_change_btn')) {
        $(btn).removeClass('active_btn_pink');
      }
    }
    $(e.target).addClass('active_btn_pink');
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
            <span name="grid" className={`grid_btn carousel_layout_change_btn ${s.grid_btn}`}
              onClick={e => changeVisibleComponent(e)}>
              GRID</span>
            <span name="list" className={`list_btn carousel_layout_change_btn active_btn_pink ${s.list_btn}`}
              onClick={e => changeVisibleComponent(e)}>LIST</span>
          </div>
        </div>
      </div>
      {visibleComponent === 'list' ?
        <EscortList />
        : <EscortGrid models={[m1, m2]} />}

    </section>
  )
}
