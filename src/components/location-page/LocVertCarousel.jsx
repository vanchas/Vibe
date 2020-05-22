import React from "react";
import s from "./vertical.module.scss";
import EscortGrid from "../home-page/EscortGrid";
import m1 from '../../assets/images/main/vertical/model-1.png';
import m2 from '../../assets/images/main/vertical/model-2.png';

export default function LocVertCarousel() {
  return (
    <div className={s.loc_vert_carousel}>
      <div className={s.loc_vert_carousel_header}>
        <h5 className="text-white">Paid Announcements 2</h5>
      </div>
      <EscortGrid models={[m1, m2]} />
    </div>
  );
}
