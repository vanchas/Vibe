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
  const router = useRouter();

  const changeLocation = e => {
    for (let btn of $('.location_item')) {
      if ($(btn).not($(e.target)).hasClass('active_btn_blue')) {
        $(btn).removeClass('active_btn_blue');
      }
    }
    $(e.target).addClass('active_btn_blue');
    if (e.target.value) {
      router.push('/location');
    }
  }

  return (
    <section className={s.location_wrapper}>
      <div className={`text-white ${s.locaton_block_title}`}>
        <p>SELECT A LOCATION BELOW</p>
      </div>
      <div className={s.location_block_select}>
        <select className="form-control"
          onChange={e => changeLocation(e)} >
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
                onClick={e => changeLocation(e)}
                className="btn text-white location_item">
                <Link href="/location">
                  <a>{loc}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
