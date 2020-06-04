import React, { useState } from "react";
import s from "./cabinet.module.scss";

export default function ModelCabinetControl({ setComponent }) {
  const [activeBtn, setActiveBtn] = useState('ads');

  const changeComponent = ref => {
    setActiveBtn(ref);
    setComponent(ref);
  }

  return (
    <div className="py-4">
      <div className={s.cab_control_name}>
        <span>USERNAME</span>
        <span>EXIT</span>
      </div>
      <div className={s.cab_control_title}>
        <h5 className="text-white">BUSINESS CABINET</h5>
      </div>
      <div className={s.cab_control_buttons}>
        <span className={`${activeBtn === 'ads' ? 'active_btn_blue' : ''}`} onClick={(e) => changeComponent("ads")}>My ads</span>
        <span className={`${activeBtn === 'reviews' ? 'active_btn_blue' : ''}`} onClick={(e) => changeComponent("reviews")}>Reviews</span>
        <span className={`${activeBtn === 'favorites' ? 'active_btn_blue' : ''}`} onClick={(e) => changeComponent("favorites")}>Favorites</span>
        <span className={`${activeBtn === 'prices' ? 'active_btn_blue' : ''}`} onClick={(e) => changeComponent("prices")}>Prices</span>
        <span className={`${activeBtn === 'balance' ? 'active_btn_blue' : ''}`} onClick={(e) => changeComponent("balance")}>Balance</span>
        <span className={`${activeBtn === 'customize' ? 'active_btn_blue' : ''}`} onClick={(e) => changeComponent("customize")}>Customize</span>
        <span className={`${activeBtn === 'support' ? 'active_btn_blue' : ''}`} onClick={(e) => changeComponent("support")}>
          Technical support
        </span>
      </div>
    </div>
  );
}
