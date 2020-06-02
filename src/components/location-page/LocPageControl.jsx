import React, { useState, useEffect } from "react";
import s from "./control.module.scss";
import ModelsFilter from '../models-filter/ModelsFilter'
import $ from 'jquery';

export default function LocPageControl() {
  const [cities, setCities] = useState([
    'South', 'Corning',
    'Cayuga Heights',
    'Fairport',
    'Orchard Park',
    'Pittsford',
    'Williamsville',
    'Tonawanda',
    'Youngstown',
    'Plandome',
    'East Aurora',
    'East Ithaca',
    'Harris Hill',
    'Skaneateles',
    'Manlius',
    'West Seneca',
    'Dering Harbor',
    'Flower Hill',
    'Billington Heights',
    'Chappaqua',
    'Rye',
    'Fayetteville',
    'SUNY Oswego',
    'Chadwicks',
    'Hamburg']);
  const [currentCity, setCurrentCity] = useState('Fairport');
  const [showCities, setShowCities] = useState(false);
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
    setCurrentCity('Fairport');
    $('.loc_cities_list').hide(() => {
      setShowCities(false);
    });
    $('.filter_items_block').hide(() => {
      setShowFilter(false);
    });
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

  const changeCity = city => {
    setCurrentCity(city);
    slideCitiesList();
  }

  const applyFilter = e => {
    e.preventDefault();
  }

  return (
    <div className={`${s.loc_page_control} text-white`}>
      <div className={s.loc_page_control_content}>
        <div className={`${s.loc_page_control_header}`}>
          <h5>ESCORTS IN {currentCity.toUpperCase()}</h5>
          <div onClick={slideCitiesList}>CHANGE LOCATION</div>
        </div>
        <div className={`${s.loc_page_filter_control}`}>
          <div onClick={slideFilter}>FILTER</div>
          <input type="text" placeholder="filter"
            className="form-control" />
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

      <div className={`loc_cities_list ${s.loc_cities_list}`}>
        <ul>{cities.map((c, i) => (
          <li onClick={e => changeCity(c)} key={i} className={`${currentCity === c ? 'active_btn_blue' : ''} btn city-item`}><span>{c}</span></li>
        ))}</ul>
      </div>
    </div>
  );
}
