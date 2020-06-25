import React, { useState } from "react";
import s from "./form.module.scss";

export default function ModelsFilter({
  availability,
  available_to,
  ethnicity,
  affiliation,
  eyes,
  hair,
  filterPosts,
  slideFilter
}) {
  const [sex, setSex] = useState(['gender', '']);
  const [ageFrom, setAgeFrom] = useState(['ageFrom', 0]);
  const [ageTo, setAgeTo] = useState(['ageTo', 0]);
  const [stateEthnicity, setEthnicity] = useState(['ethnicity_id', '']);
  const [stateHair, setHair] = useState(['hair_id', '']);
  const [stateEye, setEye] = useState(['eye_id', '']);
  const [stateAffiliation, setAffiliation] = useState(['affiliation_id', '']);
  const [stateAvailableTo, setAvailableTo] = useState(['availableto_ids', []]);
  const [stateAvailability, setAvailability] = useState(['availability_ids', []]);

  const applyFilter = (e) => {
    e.preventDefault();
    const filterItems = {};
    new Promise(res => {
      [sex, stateEthnicity, stateHair, stateEye, stateAffiliation, stateAvailableTo, stateAvailability].forEach(item => {
        if (item[1].toString().length) {
          filterItems[item[0]] = item[1]
        }
      });
      res();
    }).then(() => {
      filterPosts(filterItems);
      slideFilter();
    }).catch(err => console.error('Error: ', err));
  }

  return (
    <form onSubmit={applyFilter} className={s.filter_form}>
      <div className={s.sex_block}>
        <legend>Gender</legend>
        <label className={s.label}>
          <input
            className="mr-2"
            value="female"
            type="radio"
            name="sex"
            onChange={(e) => setSex(['gender', e.target.value])}
          />
          <span className={s.checkmark}></span>
					Female
				</label>
        <label className={s.label}>
          <input
            className="mr-2"
            value="male"
            type="radio"
            name="sex"
            onChange={(e) => setSex(['gender', e.target.value])}
          />
          <span className={s.checkmark}></span>
					Male
				</label>
      </div>

      <label className={`${s.age_block} form-group`}>
        <legend>Age</legend>
        <input
          min="18"
          className="mr-2"
          className="form-control"
          type="number"
          placeholder="from"
          onClick={(e) => setAgeFrom(e.target.value)}
        />
        <input
          className="mr-2"
          className="form-control"
          type="number"
          placeholder="to"
          onClick={(e) => setAgeTo(e.target.value)}
        />
      </label>

      <label className={`${s.ethnicity_block} form-group`}>
        <legend>Ethnicity:</legend>
        <select
          className="form-control dropdown"
          onChange={(e) => setEthnicity(['ethnicity_id', e.target.value])}
        >
          <option hidden value="default">
            -- select one --
					</option>
          {ethnicity.length ? ethnicity.map(e => (
            <option key={e.id} value={e.id}>{e.value}</option>
          )) : null}
        </select>
      </label>

      <div className={s.hair_block}>
        <legend>Hair</legend>
        {hair.length ?
          hair.map(h => (
            <label key={h.id} className={s.label}>
              <input
                className="mr-2"
                value={h.id}
                type="radio"
                name="hair"
                onClick={(e) => setHair(['hair_id', e.target.value])}
              />
              <span className={s.checkmark}></span>
              {h.value}
            </label>
          )) : null}
      </div>

      <div className={s.eye_block}>
        <legend>Eye</legend>
        {eyes.length ?
          eyes.map(e => (
            <label key={e.id} className={s.label}>
              <input
                className="mr-2"
                value={e.id}
                type="radio"
                name="eye"
                onClick={(e) => setEye(['eye_id', e.target.value])}
              />
              <span className={s.checkmark}></span>
              {e.value}
            </label>
          )) : null}
      </div>

      <div className={s.affiliation_block}>
        <legend>Affiliation</legend>
        {affiliation.length ?
          affiliation.map(a => (
            <label key={a.id} className={s.label}>
              <input
                className="mr-2"
                value={a.id}
                type="radio"
                name="affiliation"
                onClick={(e) => setAffiliation(['affiliation_id', e.target.value])}
              />
              <span className={s.checkmark}></span>
              {a.value}
            </label>
          )) : null}
      </div>

      <div className={s.availableTo_block}>
        <legend> Available To:</legend>
        {available_to.length ?
          available_to.map(a => (
            <label key={a.id} className={s.label}>
              <input
                className="mr-2"
                type="checkbox"
                value={a.id}
                onChange={(e) => {
                  if (e.target.checked) {
                    setAvailableTo([
                      'availableto_ids',
                      [...stateAvailableTo[1],
                      e.target.value]
                    ])
                  }
                }}
              />
              <span className={s.checksign}></span>
              {a.value}
            </label>
          )) : null}
      </div>

      <div className={s.availability_block}>
        <legend>Availability:</legend>
        {availability.length ?
          availability.map(a => (
            <label key={a.id} className={s.label}>
              <input
                className="mr-2"
                type="checkbox"
                value={a.id}
                onChange={(e) => {
                  if (e.target.checked) {
                    setAvailability([
                      'availability_ids',
                      [...stateAvailability[1],
                      e.target.value]
                    ])
                  }
                }}
              />
              <span className={s.checksign}></span>
              {a.value}
            </label>
          )) : null}
      </div>

      <button type="submit" className={`rounded border-0 ${s.btn_submit}`}>
        Show
			</button>
    </form>
  );
}
