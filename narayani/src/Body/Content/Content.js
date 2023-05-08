import React, { useEffect, useRef, useState } from 'react'
import ScrolImg1 from "../../ImageData/v1-1.jpg"
import ScrolImg2 from "../../ImageData/v1-2.jpg"
import ScrolImg3 from "../../ImageData/v1-3.jpg"

import Carousel from 'react-bootstrap/Carousel';
import "./Content.css"
export default function Content() {
  const data=[ScrolImg1,ScrolImg2,ScrolImg3]
  const [ind,setInd]=useState(0)
  const ref=useRef()
  
  useEffect(()=>{
    clearInterval(ref.current)
   ref.current= setInterval(()=>{
       if(ind==2){
        setInd(0)
       }
       else if(ind>=0){
        setInd(pre=>pre+1)
       }
       console.log(ind)
    },1000)
  })

  return (
    <div className='content-main-div'>
      <img src={data[ind]}/>
    </div>
  )
}
