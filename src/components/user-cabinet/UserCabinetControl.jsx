import React, { useState } from 'react'
import s from './user-edit.module.scss'

export default function UserCabinetControl({ setComponent }) {
  const [activeBtn, setActiveBtn] = useState('favorites');

  const changeComponent = ref => {
    setActiveBtn(ref);
    setComponent(ref);
  }

  return (
    <div className={s.user_edit_control}>
      <div className={s.cab_control_name}>
        <span>USERNAME</span>
        <span>EXIT</span>
      </div>
      <div className={s.cab_control_title}>
        <h5 className="text-white">BUSINESS CABINET</h5>
      </div>
      <div className={s.cab_control_buttons}>
        <span className={`${activeBtn === 'balance' ? 'active_btn_blue' : ''}`} onClick={(e) => changeComponent("balance")}>Balance</span>
        <span className={`${activeBtn === 'favorites' ? 'active_btn_blue' : ''}`} onClick={(e) => changeComponent("favorites")}>Favorites</span>
        <span className={`${activeBtn === 'prices' ? 'active_btn_blue' : ''}`} onClick={(e) => changeComponent("prices")}>Prices</span>
        <span className={`${activeBtn === 'edit' ? 'active_btn_blue' : ''}`} onClick={(e) => changeComponent("edit")}>Edit</span>
        <span className={`${activeBtn === 'reports' ? 'active_btn_blue' : ''}`} onClick={(e) => changeComponent("reports")}>Reports</span>
        <span className={`${activeBtn === 'support' ? 'active_btn_blue' : ''}`} onClick={(e) => changeComponent("support")}>
          Technical support
        </span>
      </div>
    </div>
  )
}
