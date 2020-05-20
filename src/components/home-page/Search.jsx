import React from 'react'
import s from './search.module.scss'

export default function Search() {
  return (
    <section className={s.search_block}>
      <div className={s.search_block_content}>
        <div className={`text-white ${s.search_input_label}`}>SEARCH</div>
        <div className={s.search_input}>
          <input type="text" className="form-control" />
        </div>
        <div className={`text-white ${s.add_post_btn}`}>
          <span>POST AD</span>
        </div>
      </div>
    </section>
  )
}
