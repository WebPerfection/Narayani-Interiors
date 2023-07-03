import React from 'react'
import { GiStabbedNote } from "react-icons/gi";
import { FaBuilding, FaReceipt } from "react-icons/fa";
import "./Working.css"
export default function WorkingProcess() {
  return (
    <div className='working_main_div' >
      <div className='heading-div'>
        <h6 className='h6' >TO DO GOOD DESIGN</h6>
        <h1 style={{color:'black'}}>OUR WORKING PROCESS</h1>
      </div>
      <div className='Flex working-card' id="working-card">

        <div className='card-work'>
          <div className='Flex' ><h1 className='working-icon Flex' >01</h1></div>
          <div>

            <h3>Flat 10 year warranty</h3>
            <p>Choose professionally designed interiors crafted with superior quality materials, leaving no room for defects.</p>
          </div>
          <div className='Flex icon-work'><FaBuilding /></div>
        </div>
        <div className='card-work'>
          <div className='Flex'><h1 className='working-icon Flex'>02</h1></div>
          <div><h3>45-day delivery</h3>
            <p>Get professional expertise and stunning interiors for your new home in just 45 days—our guaranteed delivery.</p></div>
          <div className='Flex icon-work'><GiStabbedNote /></div>
        </div>
        <div className='card-work'>
          <div className='Flex '><h1 className='working-icon Flex'>03</h1></div>
          <div><h3>Post-installation service</h3>
            <p>Get unwavering support from our dedicated care team and complete your design journey with confidence.</p></div>
          <div className='Flex icon-work'><FaReceipt /></div>
        </div>
      </div>
    </div>
  )
}
