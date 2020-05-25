import React, { useState } from 'react'
import s from './support.module.scss'
import $ from 'jquery'

export default function Support() {
    const [showText, setShowText] = useState(false);
    const [supportMessages] = useState([1, 2, 3, 4]);

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

            {supportMessages.map((item, i) => {
                return <div key={i} className={s.history_item}>
                    <div className={`${s.task_body}`}>
                        <div className={`text-white`}>Theme</div>
                        <div className={`text-white text-of-support-message ${s.text_of_support_message} ${showText && s.show}`} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                        </div>
                        <div className={s.send_btn}>
                            <span onClick={e => setShowText(!showText)}>{!showText ? 'READ MORE' : 'HIDE'}
                            </span>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}
