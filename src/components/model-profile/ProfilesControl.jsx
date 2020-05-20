import React from "react";
import s from "./profile.module.scss";

export default function ProfilesControl() {
  return (
    <div className={`text-white ${s.profile_control}`}>
      <div className={s.profile_control_buttons}>
        <div>
          <span>PREVIUS</span>
          <span>NEXT</span>
        </div>
        <div>
          <span> CLOSE X</span>
        </div>
      </div>
    </div>
  );
}
