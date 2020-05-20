import React, { useState } from "react";
import s from "./location.module.scss";
import Link from "next/link";

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

  return (
    <section className={s.location_wrapper}>
      <div className={`text-white ${s.locaton_block_title}`}>
        <p>SELECT A LOCATION BELOW</p>
      </div>
      <div className={s.location_block_list}>
        <ul>
          {locations.map((loc, i) => {
            return (
              <li className="btn text-white" key={i}>
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
