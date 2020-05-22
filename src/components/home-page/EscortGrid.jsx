import React from 'react';
import s from './escort.module.scss';
import Link from 'next/link';
import fav from '../../assets/images/main/signs/favorite-pink.png';
import crown from '../../assets/images/main/signs/crown-pink.png';
import star from '../../assets/images/main/signs/star-pink.png';
import plane from '../../assets/images/main/signs/plane-pink.png';


export default function EscortGrid(props) {
  return (
    <div style={{
      maxWidth: '1260px',
      margin: '1em auto',
      padding: '0 0 5em 0'
    }} >
      {props.models.map((model, i) => {
        return <div key={i}>
          <div className={s.vertical_slide}>
            <div className={s.vertical_slide_image}>
              <img src={model} alt="model" className="w-100" />
            </div>
            <div className={s.vertical_slide_model_info}>
              <div>
                <h5 className={`text-white ${s.name}`}>Model Name</h5>
                <div className={s.network_status}>Online</div>
                <div className={`text-white ${s.location}`}>Location</div>
                <p className={`text-white ${s.summary}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo</p>
              </div>
              <div className={s.card_control}>
                <div>
                  <img src={fav} alt="" />
                </div>
                <div>
                  <img src={crown} alt="" />
                </div>
                <div>
                  <img src={star} alt="" />
                </div>
                <div>
                  <img src={plane} alt="" />
                </div>
              </div>
              <div className={`text-white ${s.verification}`}>
                <span className={s.verified}>VERIFIED <i></i></span>
                <span className={s.view_profile}>
                  <Link href="/modelProfile"><a className="btn text-white">
                    VIEW PROFILE
                  </a></Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      })}
    </div>
  )
}
