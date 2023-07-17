import React, { useState } from "react";
import "./MakeApoiment.css";
import { useDispatch, useSelector } from "react-redux";
import { toggelModel } from "../../Redux/Action";
import Consult from "../../Consult/Consult";
export default function MakeApoiment() {
  const model = useSelector((store) => store);
  const dispatch = useDispatch();
  const [consult,setConsult]=useState(false)
  const consultClick=()=>{
    setConsult(false)
  }
  const openModel = () => {
    // dispatch(toggelModel());
    setConsult(true)
  };

  return (
    <div className="appointment-main-div Flex">
      <div
        className="appointment-div Flex"
      >
        <h4>
          Looking to Join Our Professional Team?{" "}
          <span>Schedule an Appointment Today!</span>
        </h4>
        <button onClick={openModel} className="appointment-bt">
          Make An Appointment
        </button>
      </div>
      <Consult consult={consult} consultClick={consultClick}/>
    </div>
  );
}
