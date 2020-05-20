import React from 'react'
import s from './styles/header.module.scss'
import HeaderBg from '../assets/images/header/header.png'

export default function Header() {
  return (
    <header>
      <div className={s.header_image_block}>
        <img src={HeaderBg} alt="Vibe City" className="w-100" />
        <h1 className={`${s.header_title} text-white`}>VIBE <br /> CITY</h1>
      </div>
      <style jsx>{`
          @font-face {
            font-family: 'Progress';
                src: url('/src/assets/fonts/progress.otf');
          }
      `}</style>
    </header>
  )
}
