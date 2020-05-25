import React from 'react'
import Link from 'next/link'
import s from './balance.module.scss'

export default function Balance() {
  return (
    <div className={s.balance_wrap}>
      <div className={s.balance_info_block}>
        <div className={s.small_info_block}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendis</p>
          <span><Link href="/balance"><a>Fill the balance</a></Link></span>
        </div>
        <div className={s.big_info_block}>
          <div>INFO</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
      </div>

      <div className={s.transaction_history}>
        <div className={s.transaction_heading}>
          <span>Transaction History</span>
        </div>
        <div className={`text-white ${s.transaction}`}>
          <div className={s.transaction_title}>
            DEBIT</div>
          <div className={s.t_price}>$ 49</div>
          <p className={s.t_text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est facilis vitae similique nisi alias, saepe, corrupti et, sapiente tenetur quo optio veniam iste! Corporis pariatur doloremque dolorem provident inventore minus.
                    </p>
          <div className={s.t_date}>
            22 . 07 . 2019
                </div>
        </div>
        <div className={`text-white ${s.transaction}`}>
          <div className={s.transaction_title}>
            TOP UP</div>
          <div className={s.t_price}>$ 25</div>
          <p className={s.t_text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est facilis vitae similique nisi alias, saepe, corrupti et, sapiente tenetur quo optio veniam iste!
                    </p>
          <div className={s.t_date}>
            22 . 07 . 2019
                </div>
        </div>
        <div className={`text-white ${s.transaction}`}>
          <div className={s.transaction_title}>
            DEBIT</div>
          <div className={s.t_price}>$ 49</div>
          <p className={s.t_text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est facilis vitae similique nisi alias, saepe, corrupti et, sapiente tenetur quo optio veniam iste! Corporis pariatur doloremque dolorem provident inventore minus.
                    </p>
          <div className={s.t_date}>
            22 . 07 . 2019
                </div>
        </div>
        <div className={`text-white ${s.transaction}`}>
          <div className={s.transaction_title}>
            TOP UP</div>
          <div className={s.t_price}>$ 25</div>
          <p className={s.t_text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est facilis vitae similique nisi alias, saepe, corrupti et, sapiente tenetur quo optio veniam iste!
                    </p>
          <div className={s.t_date}>
            22 . 07 . 2019
                </div>
        </div>
      </div>
    </div>
  )
}
