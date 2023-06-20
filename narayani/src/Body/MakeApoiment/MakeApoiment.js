import React from 'react'
import "./MakeApoiment.css"
import { useDispatch, useSelector } from "react-redux";
import { toggelModel } from '../../Redux/Action';
export default function MakeApoiment() {
    const model=useSelector(store=>store)
  const dispatch=useDispatch()

  const openModel=()=>{
    dispatch(toggelModel())
  }
 
  return (
    <div className='appointment-main-div Flex'>
       <div className='appointment-div Flex'>
        <h4>Looking to Join Our Professional Team? <span>Schedule an Appointment Today!</span></h4>
        <button onClick={openModel} className='appointment-bt'>Make An Appointment</button>
       </div>
    </div>
  )
}
