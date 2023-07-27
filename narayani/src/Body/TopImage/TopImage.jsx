import React from "react";
import "./TopImage.css";
import topbg from "./top.jpg";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function TopImage({ heading }) {
  return (
    <div className="topImage" style={{ backgroundImage: `url(${topbg})`,textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto" }}>
      {/* <img src={topbg}/> */}
     {heading &&  <div style={{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
      <h1>{heading}</h1>
     </div>}
    </div>
  );
}
