import React, { useState, useEffect } from 'react'
import s from './support.module.scss'
import $ from 'jquery'

export default function Support({ tasks, createSupportTask, getAllUsersTasks }) {
    const [showText, setShowText] = useState(false);
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        getAllUsersTasks();
    }, []);

    const openTaskText = id => {
        !showText ?
            $(`.show-${id}`).css({
                whiteSpace: 'normal',
                overflow: 'visible',
            }) : $(`.show-${id}`).css({
                whiteSpace: 'nowrap',
                overflow: 'hidden'
            });
        setShowText(!showText);
    }

    const createTask = () => {
        if (subject.length > 2 && subject.length < 51 && message.length) {
            createSupportTask({ subject, message });
            setSubject('');
            setMessage('');
        }
    }

    return (
        <div className={s.support}>
            <div className={s.create_task}>
                <div className={s.task_title}>
                    CREATE NEW TASK
                </div>
                <div className={s.task_body}>
                    <input type="text" placeholder="Theme" className={`form-control`} onChange={e => setSubject(e.target.value)} />
                    <textarea className={`form-control`} rows="3" onChange={e => setMessage(e.target.value)} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."></textarea>
                    <div className={s.send_btn}>
                        <span onClick={createTask}>SEND</span>
                    </div>
                </div>
            </div>

            <div className={s.history}>
                <span>HISTORY</span>
            </div>

            {tasks && tasks.length ? tasks.map((task, i) => {
                return <div key={i} className={s.history_item}>
                    <div className={`${s.task_body}`}>
                        <div className={`text-white`}>{task.subject}</div>
                        <div className={`text-white ${s.text_of_support_message} show-${task.id}`} >
                            <p>{task.message}</p>
                            {task.answer && <p>{task.answer}</p>}
                        </div>
                        <div className={s.send_btn}>
                            <span onClick={e => openTaskText(task.id)}>{!showText ? 'READ MORE' : 'HIDE'}
                            </span>
                        </div>
                    </div>
                </div>
            }) : <div className="h1 text-info text-center py-5 ">No tasks...</div>}
        </div>
    )
}
