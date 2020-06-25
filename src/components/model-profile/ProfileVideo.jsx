import React from "react";

export default function ProfileVideo({ videoLink }) {
  return (
    <div>
      <iframe width="420" height="315" className="w-100"
        src={videoLink} allowFullScreen>
      </iframe>
    </div>
  );
}
