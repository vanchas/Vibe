import React from "react";
import s from "./header.module.scss";
import Link from 'next/link';
import HeaderBg from "../../assets/images/header/header.png";
import NavComponent from "./Nav";

export default function Header() {
  return (
    <div className={s.header}>
      <NavComponent />
      <div className={s.header_image_block}>
        <img src={HeaderBg} alt="Vibe City" className="w-100" />
        <h1 className={`${s.header_title} text-white`}>
          <Link href="/"><a style={{ textDecoration: 'none' }} className="text-white">
            VIBE <br /> CITY
          </a></Link>
        </h1>
      </div>
      <style jsx>{`
        @font-face {
          font-family: "Progress";
          src: url("/src/assets/fonts/progress.otf");
        }
      `}</style>
    </div>
  );
}
