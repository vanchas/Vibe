import React, { useState } from "react";
import { useRouter } from 'next/router'
import s from "./location.module.scss";
import Link from "next/link";

export default function Location({ states, getCities }) {
  const [currentLocation, setCurrentLocation] = useState('');
  const router = useRouter();

  const changeLocation = stateId => {
    getCities(stateId);
    setCurrentLocation(stateId);
    states.forEach(state => {
      if (+state.id === +stateId) {
        router.push(`/location?id=${state.id}`);
      }
    });
  }

  return (
    <section className={s.location_wrapper}>
      {states.length ? <>
        <div className={`text-white ${s.locaton_block_title}`}>
          <p>SELECT A LOCATION BELOW</p>
        </div>
        <div className={s.location_block_select}>
          <select className="form-control"
            onChange={e => changeLocation(e.target.value)} >
            <option value="default" hidden>Location</option>
            {states.map((state, i) => (
              <option key={i} value={state.id}>{state.name}</option>
            ))}
          </select>
        </div>
        <div className={s.location_block_list}>
          <ul>
            {states.map((state, i) => {
              return (
                <li key={i}
                  onClick={e => changeLocation(state.id)}
                  className={`btn text-white location_item`}>
                  <Link href={{pathname: `/location`,
                    query: { id: state.id }}} >
                    <a className={currentLocation === state ? 'active_btn_blue' : ''}>{state.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </> : null}
    </section>
  );
}
