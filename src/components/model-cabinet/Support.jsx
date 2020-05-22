import React from 'react'
import s from './support.module.scss'

export default function Support() {
    return (
        <div className={s.support}>
            <div className={s.create_task}>
                <div className={s.task_title}>
                    CREATE NEW TASK
                </div>
                <div className={s.task_body}>
                    <input type="text" placeholder="Theme" className={`form-control`} />
                    <textarea className={`form-control`} rows="3" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."></textarea>
                    <div className={s.send_btn}>
                        <span>SEND</span>
                    </div>
                </div>
            </div>

            <div className={s.history}>
                <span>HISTORY</span>
            </div>

            {[1, 2, 3, 4].map((item, i) => {
                return <div key={i} className={s.history_item}>
                    <div className={`${s.task_body}`}>
                        <div className={`text-white`}>Theme</div>
                        <div className={`text-white`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."</div>
                        <div className={s.send_btn}>
                            <span>READ MORE</span>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}
