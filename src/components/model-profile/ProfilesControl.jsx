import React from "react";
import s from "./profile.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProfilesControl({ posts }) {
  const router = useRouter();

  const showPreviousPost = async () => {
    if (router.query.id === '1') {
      await router.push(`/modelProfile?id=${posts.length}`);
      window.location.reload(true);
    } else {
      await router.push(`/modelProfile?id=${+router.query.id - 1}`);
      window.location.reload(true);
    }
  }
  const showNextPost = async () => {
    if (+router.query.id === +posts.length) {
      await router.push(`/modelProfile?id=1`);
      window.location.reload(true);
    } else {
      await router.push(`/modelProfile?id=${+router.query.id + 1}`);
      window.location.reload(true);
    }
  }

  return (
    <div className={`text-white ${s.profile_control}`}>
      <div className={s.profile_control_buttons}>
        <div>
          <span onClick={showPreviousPost}>PREVIUS</span>
          <span onClick={showNextPost}>NEXT</span>
        </div>
        <div>
          <span><Link href="/"><a>CLOSE</a></Link></span>
        </div>
      </div>
    </div>
  );
}
