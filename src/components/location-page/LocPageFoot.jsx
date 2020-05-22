import React from "react";
import s from "./foot.module.scss";

export default function LocPageFoot() {
  return (
    <div>
      <div className={s.loc_footer}>
        <div></div>
        <div className={`text-white ${s.loc_foot_btn}`}>
          SEE ALL PROFILES IN THE STATE
        </div>
        <div></div>
      </div>
    </div>
  );
}
