import React from "react";
import s from "./control.module.scss";

export default function LocPageControl() {
  return (
    <div className={`${s.loc_page_control} text-white`}>
      <div className={s.loc_page_control_content}>
        <div className={`${s.loc_page_control_header}`}>
          <h5>ESCORTS IN LOS ANGELES</h5>
          <div>CHANGE LOCATION</div>
        </div>
        <div className={`${s.loc_page_filter_control}`}>
          <div>FILTER</div>
          <input type="text" className="form-control text-white" />
        </div>
      </div>
    </div>
  );
}
