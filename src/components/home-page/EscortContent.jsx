import React, { useState, useEffect } from 'react'
import s from './escort.module.scss'
import ModelsFilter from '../models-filter/ModelsFilter'
import EscortList from './EscortList'
import EscortGrid from './EscortGrid'
import $ from 'jquery'
import m1 from '../../assets/images/main/vertical/model-1.png';
import m2 from '../../assets/images/main/vertical/model-2.png';


export default function EscortContent() {
  const [visibleComponent, setVisibleComponent] = useState('list');
  const [sex, setSex] = useState('');
  const [ageFrom, setAgeFrom] = useState(0);
  const [ageTo, setAgeTo] = useState(0);
  const [ethnicity, setEthnicity] = useState('');
  const [hair, setHair] = useState('');
  const [eye, setEye] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [availableTo, setAvailableTo] = useState('');
  const [availability, setAvailability] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    $('.filter_items_block').hide(() => {
      setShowFilter(false);
    });
  }, []);

  const slideFilter = () => {
    $('.filter_items_block').slideToggle(() => {
      setShowFilter(!showFilter);
    });
  }

  const changeVisibleComponent = e => {
    e.persist();
    $('.models-view-block').fadeOut(300, function () {
      setVisibleComponent($(e.target).attr('name'));
      $('.models-view-block').fadeIn(300);
    });
  }

  const applyFilter = e => {
    e.preventDefault();
  }

  return (
    <section className={s.escort_content_block} style={{ minHeight: '100vh' }}>
      <div className={`text-white ${s.escort_content_title}`}>
        <p>Meet our selection of worldwide escorts</p>
      </div>
      <div className={`${s.filter_sort_control}`}>
        <div className={s.filter_btn_wrap}>
          <div className={s.filter_btn_group}>
            <span onClick={slideFilter} className={s.filter_btn}>FILTER</span>
            <select className={`form-control border-0 ${s.sorting_btn}`}>
              <option value="default" hidden>SORTING</option>
              <option value="price / from biger to smaller">price / from biger to smaller</option>
              <option value="price / from smaller to biger">price / from smaller to biger</option>
              <option value="date added">date added</option>
              <option value="number of reviews">number of reviews</option>
            </select>
          </div>
          <div className={s.filter_btn_group}>
            <span name="grid" className={`grid_btn carousel_layout_change_btn ${visibleComponent === 'grid' ? 'active_btn_pink' : ''} ${s.grid_btn}`}
              onClick={e => changeVisibleComponent(e)}>
              GRID</span>
            <span name="list" className={`list_btn carousel_layout_change_btn ${visibleComponent === 'list' ? 'active_btn_pink' : ''} ${s.list_btn}`}
              onClick={e => changeVisibleComponent(e)}>LIST</span>
          </div>
        </div>
      </div>

      <div className={`filter_items_block ${s.filter_items_block}`}>
        <ModelsFilter
          setSex={setSex}
          setAgeTo={setAgeTo}
          setAgeFrom={setAgeFrom}
          setEthnicity={setEthnicity}
          setHair={setHair}
          setEye={setEye}
          setAffiliation={setAffiliation}
          setAvailableTo={setAvailableTo}
          setAvailability={setAvailability}
          applyFilter={applyFilter}
        />
      </div>

      <div className="models-view-block">
        {visibleComponent === 'list' ?
          <EscortList />
          : <EscortGrid models={[m1, m2]} />}
      </div>

    </section>
  )
}
