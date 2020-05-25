import React, { useState } from 'react';
import Link from 'next/link';
import s from "./header.module.scss";
import $ from 'jquery';

const NavComponent = props => {
  const [isOpen, setIsOpen] = useState(true);

  const closeNav = () => {
    $('.nav').slideToggle();
  }

  return (
    <div className={s.navbar}>
      <label className={s.navbar_toggler}
        onClick={closeNav}>
        <input type="checkbox" hidden />
        <span></span><span></span><span></span>
      </label>

      <nav className="nav">
        <ul>
          <li>
            <Link href="/modelCabinet"><a>
              Model Cabinet</a></Link>
          </li>
          <li>
            <Link href="/userCabinet"><a>
              User Cabinet</a></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

NavComponent.getInitialProps = async ({ Component, ctx }) => {
  return {}
}

export default NavComponent;
