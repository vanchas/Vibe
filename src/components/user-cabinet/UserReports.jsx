import React from 'react'
import s from "./user-edit.module.scss";

export default function UserReports() {
  return (
    <div className={s.reports_block}>
      <h5 className={`text-white ${s.reports_block_heading}`}>REPORTS YOU'VE LEFT</h5>
      <ul>
        {[1, 2, 3].map((rep, i) => (
          <li key={i}>
            <div className={s.report}>
              <div className={s.report_title}>
                <span>MODEL NAME</span>
                <span>22.07.19</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
              <span className={s.add_btn}>TO AD</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
