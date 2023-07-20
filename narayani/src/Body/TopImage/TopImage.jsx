import React from "react";
import "./TopImage.css";
import topbg from "./top.jpg";

export default function TopImage({ heading }) {
  return (
    <div className="topImage" style={{ backgroundImage: `url(${topbg})` }}>
      {/* <img src={topbg}/> */}
      <h1>{heading}</h1>
    </div>
  );
}
