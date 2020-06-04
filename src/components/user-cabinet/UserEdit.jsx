import React, { useState } from 'react'
import s from "./user-edit.module.scss";

export default function UserEdit() {
  const [accountEditMode, setAccountEditMode] = useState(false);

  const nameInput = (
    <input
      className="form-control bg-dark text-white"
      type="text"
      placeholder="Name"
    />
  );
  const secondNameInput = (
    <input
      className="form-control bg-dark text-white"
      type="text"
      placeholder="Second Name"
    />
  );

  return (
    <div className={`text-white ${s.customize_block}`}>
      <div className={s.customize_block_title}>ACCOUNT</div>
      <div className={s.customize_block_info}>
        <div className={s.customize_block_info_text}>
          <dl>
            <dt>Name:</dt>
            <dd>{!accountEditMode ? "Name" : nameInput}</dd>
            <dt>Second Name:</dt>
            <dd>{!accountEditMode ? "Second Name" : secondNameInput}</dd>
          </dl>
        </div>
        <div>
          <span
            className={s.btn_edit}
            onClick={() => {
              setAccountEditMode(!accountEditMode);
            }}
          >
            {!accountEditMode ? "EDIT" : "SAVE"}
          </span>
        </div>
      </div>
    </div>
  )
}
