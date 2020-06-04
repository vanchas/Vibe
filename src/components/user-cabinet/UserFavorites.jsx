import React from 'react'
import s from './user-edit.module.scss'
import EscortList from "../home-page/EscortList";
import m3h from "../../assets/images/main/horizontal/model-3.png";
import m4h from "../../assets/images/main/horizontal/model-4.png";
import m1h from "../../assets/images/main/horizontal/model-1.png";
import m2h from "../../assets/images/main/horizontal/model-2.png";

export default function UserFavorites() {
  return (
    <div className={s.favorites_list_block}>
      <div className={s.favorites_list_block_heading}><h5>YOUR FAVORITES</h5></div>
      <EscortList models={[m1h, m2h, m3h, m4h, m1h, m2h]} />
    </div>
  )
}
