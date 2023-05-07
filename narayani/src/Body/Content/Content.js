import React from 'react'
import ScrolImg1 from "../../ImageData/v1-1.jpg"
import ScrolImg2 from "../../ImageData/v1-2.jpg"
import ScrolImg3 from "../../ImageData/v1-3.jpg"
import ScrolImg4 from "../../ImageData/v1-2.jpg"
import Carousel from 'react-bootstrap/Carousel';
import "./Content.css"
export default function Content() {

  return (
    <div className='content-main-div'>
      <img src={ScrolImg1} />
    </div>
  )
}
