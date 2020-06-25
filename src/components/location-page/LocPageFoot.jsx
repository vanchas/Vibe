import React from "react";
import s from "./foot.module.scss";
import { useRouter } from "next/router";

export default function LocPageFoot({ filterPosts }) {
  const router = useRouter();

  return (
    <div>
      <div className={s.loc_footer}>
        <div></div>
        <div className={`text-white ${s.loc_foot_btn}`}
          onClick={() => filterPosts({ 'state_id': router.query.id })} >
          SEE ALL PROFILES IN THE STATE
        </div>
        <div></div>
      </div>
    </div>
  );
}
