import React, { useState, useEffect } from "react";
import s from "./control.module.scss";
import ModelsFilter from '../models-filter/ModelsFilter'
import $ from 'jquery';
import { useRouter } from 'next/router';

export default function LocPageControl({
  cities,
  availability,
  available_to,
  ethnicity,
  eyes,
  hair,
  affiliation,
  filterPosts
}) {
  const [currentCity, setCurrentCity] = useState('');
  const [showCities, setShowCities] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setCurrentCity(router.query.state);
    $('.loc_cities_list').hide(() => {
      setShowCities(false);
    });
    $('.filter_items_block').hide(() => {
      setShowFilter(true);
    });
    return () => {
      setCurrentCity('');
    }
  }, []);

  const slideCitiesList = () => {
    $('.loc_cities_list').slideToggle(() => {
      setShowCities(!showCities);
    });
  }

  const slideFilter = () => {
    $('.filter_items_block').slideToggle(() => {
      setShowFilter(!showFilter);
    });
  }

  const changeCity = (name, id) => {
    setCurrentCity(name);
    filterPosts({ 'city_id': id })
    slideCitiesList();
  }

  return (
    <div className={`${s.loc_page_control} text-white`}>
      <div className={s.loc_page_control_content}>
        <div className={`${s.loc_page_control_header}`}>
          <h5>ESCORTS {currentCity && currentCity.length ? 'IN ' + currentCity.toUpperCase() : null}</h5>
          <div onClick={slideCitiesList}>CHANGE LOCATION</div>
        </div>

        <div className={`loc_cities_list ${s.loc_cities_list}`}>
          {cities && cities.length ? <ul>{cities.map((c, i) => (
            <li onClick={e => changeCity(c.name, c.id)} key={i} className={`${currentCity === c.name ? 'active_btn_blue' : ''} btn city-item`}><span>{c.name}</span></li>
          ))}</ul> : <div className="text-center h1 text-info py-5">No cities ...</div>}
        </div>

        <div className={`${s.loc_page_filter_control}`}>
          <div onClick={slideFilter}>FILTER</div>
          <input type="text" placeholder="filter"
            className="form-control" />
        </div>
      </div>

      <div className={`filter_items_block ${s.filter_items_block}`}>
        <ModelsFilter
          availability={availability}
          available_to={available_to}
          ethnicity={ethnicity}
          affiliation={affiliation}
          filterPosts={filterPosts}
          eyes={eyes}
          hair={hair}
          slideFilter={slideFilter}
        />
      </div>
    </div>
  );
}
