import React, { useState } from 'react'

export default function TasksList({ tasks, editSupportTasks, deleteSupportTask }) {
  const [showForm, setShowForm] = useState(false);
  const [taskId, setTaskId] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    if (taskId.toString().length) {
      editSupportTasks({
        subject, message, answer, id: taskId
      });
    }
  }

  return (
    <div>
      <span className="h2 text-white d-block text-center">All Support Tasks</span>

      {showForm &&
        <form onSubmit={submitHandler} className="form-group container">
          <label className="form-group text-white">
            Subject
          <input type="text" className="form-control"
              onChange={e => setSubject(e.target.value)} />
          </label>
          <label className="form-group text-white">
            Message
          <input type="text" className="form-control"
              onChange={e => setMessage(e.target.value)} />
          </label>
          <label className="form-group text-white">
            Answer
          <input type="text" className="form-control"
              onChange={e => setAnswer(e.target.value)} />
          </label>
          <div>
            <button type="submit" className="btn btn-info">Save</button>
          </div>
        </form>}

      <ul className="list-group text-white container">
        {tasks && tasks.length
          ? tasks.map((t, i) => (
            <li key={i} className="list-item py-2">
              <span><b> Subject</b>: {t.subject}</span><br />
              <span><b> Message</b>: {t.message}</span><br />
              {t.answer && <span><b> Answer</b>: {t.answer}</span>}
              <div>
                <button onClick={() => {
                  setShowForm(!showForm);
                  setTaskId(t.id);
                }}>Edit</button>
                <button className="btn btn-danger"
                  onClick={() => deleteSupportTask(t.id)}>Remove</button>
              </div>
            </li>
          )) : <div className="h1 text-center text-info">No tasks...</div>}
      </ul>
    </div >
  )
}
