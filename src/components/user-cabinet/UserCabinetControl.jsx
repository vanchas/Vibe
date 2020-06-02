import React from 'react'
import s from './user-edit.module.scss'

export default function UserCabinetControl() {
  return (
    <div className={s.user_edit_control}>
      <div>
        <span>USERNAME</span>
        <span>EXIT</span>
      </div>
    </div>
  )
}
