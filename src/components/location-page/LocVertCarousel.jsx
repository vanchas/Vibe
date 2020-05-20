import React from "react";
import s from "./vertical.module.scss";
import EscortGrid from "../home-page/EscortGrid";

export default function LocVertCarousel() {
  return (
    <div className={s.loc_vert_carousel}>
      <div className={s.loc_vert_carousel_header}>
        <h5 className="text-white">Paid Announcements 2</h5>
      </div>
      <EscortGrid />
    </div>
  );
}
