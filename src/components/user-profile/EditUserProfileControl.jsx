import React from 'react'
import s from './profile-edit.module.scss'

export default function EditUserProfileControl() {
  return (
    <div className={s.user_edit_control}>
      <div>
        <span>USERNAME</span>
        <span>EXIT</span>
      </div>
    </div>
  )
}
