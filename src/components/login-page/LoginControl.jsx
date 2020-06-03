import React from 'react'
import s from './login.module.scss';

export default function LoginControl({ changeVisibleSignInComponent, visibleSignInComponent }) {
  return (
    <div className={`${visibleSignInComponent ? s.active : null} ${s.login_btn_control}`}>
      <span className="btn"
        onClick={changeVisibleSignInComponent}>
        SignIn / SignUp</span>
    </div>
  )
}
