import React, { useState } from "react";
import s from "./cabinet.module.scss";
import $ from 'jquery';

export default function ModelCabinetControl(props) {
  const [activeBtn, setActiveBtn] = useState('ads');

  const activateBtn = e => {
    for (let btn of $('.cabinet_control_btn')) {
      if ($(btn).not($(e.target)).hasClass('cabinet_control_btn')) {
        $(btn).removeClass('active_btn_blue');
      }
    }
    $(e.target).addClass('active_btn_blue');
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
        <span className="cabinet_control_btn active_btn_blue" onClick={(e) => {
          props.setComponent("ads");
          activateBtn(e);
        }}>My ads</span>
        <span className="cabinet_control_btn" onClick={(e) => {
          props.setComponent("reviews");
          activateBtn(e);
        }}>Reviews</span>
        <span className="cabinet_control_btn" onClick={(e) => {
          props.setComponent("favorites");
          activateBtn(e);
        }}>Favorites</span>
        <span className="cabinet_control_btn" onClick={(e) => {
          props.setComponent("prices");
          activateBtn(e);
        }}>Prices</span>
        <span className="cabinet_control_btn" onClick={(e) => {
          props.setComponent("balance");
          activateBtn(e);
        }}>Balance</span>
        <span className="cabinet_control_btn" onClick={(e) => {
          props.setComponent("customize");
          activateBtn(e);
        }}>Customize</span>
        <span className="cabinet_control_btn" onClick={(e) => {
          props.setComponent("support");
          activateBtn(e);
        }}>
          Technical support
        </span>
      </div>
    </div>
  );
}
