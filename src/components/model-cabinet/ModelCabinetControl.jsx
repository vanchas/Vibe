import React from "react";
import s from "./cabinet.module.scss";

export default function ModelCabinetControl(props) {
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
        <span onClick={(e) => props.setComponent("ads")}>My ads</span>
        <span onClick={(e) => props.setComponent("reviews")}>Reviews</span>
        <span onClick={(e) => props.setComponent("favorites")}>Favorites</span>
        <span onClick={(e) => props.setComponent("prices")}>Prices</span>
        <span onClick={(e) => props.setComponent("balance")}>Balance</span>
        <span onClick={(e) => props.setComponent("customize")}>Customize</span>
        <span onClick={(e) => props.setComponent("support")}>
          Technical support
        </span>
      </div>
    </div>
  );
}
