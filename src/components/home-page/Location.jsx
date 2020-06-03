import React, { useState } from "react";
import { useRouter } from 'next/router'
import s from "./location.module.scss";
import Link from "next/link";
import $ from 'jquery';

export default function Location() {
  const [locations] = useState([
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ]);
  const [currentLocation, setCurrentLocation] = useState('');
  const router = useRouter();

  const changeLocation = location => {
    setCurrentLocation(location);
    router.push('/location');
  }

  return (
    <section className={s.location_wrapper}>
      <div className={`text-white ${s.locaton_block_title}`}>
        <p>SELECT A LOCATION BELOW</p>
      </div>
      <div className={s.location_block_select}>
        <select className="form-control"
          onChange={e => changeLocation(e.target.value)} >
          <option value="default" hidden>Location</option>
          {locations.map((loc, i) => (
            <option key={i} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
      <div className={s.location_block_list}>
        <ul>
          {locations.map((loc, i) => {
            return (
              <li key={i}
                onClick={e => changeLocation(loc)}
                className={`btn text-white location_item`}>
                <Link href="/location">
                  <a className={currentLocation === loc ? 'active_btn_blue' : ''}>{loc}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
