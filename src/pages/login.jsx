import React, { useState } from 'react'
import SignIn from '../components/login-page/SignIn'
import SignUp from '../components/login-page/SignUp'

export default function login() {
  const [visibleSignInComponent, setVisibleSignInComponent] = useState(true);

  const changeVisibleSignInComponent = () => {
    setVisibleSignInComponent(!visibleSignInComponent);
  }

  return (
    <div className="px-2">
      <div className="login-btn-control">
        <span className="btn btn-light my-4"
          onClick={changeVisibleSignInComponent}>
          SignIn / SignUp</span>
      </div>

      {visibleSignInComponent
        ? <SignIn />
        : <SignUp />}
    </div>
  )
}
