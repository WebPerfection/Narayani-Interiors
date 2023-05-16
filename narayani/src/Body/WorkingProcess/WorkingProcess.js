import React from 'react'
import { RiProjectorLine } from "react-icons/ri";
import { GiStabbedNote } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import { FaBuilding, FaReceipt } from "react-icons/fa";
import { Link } from 'react-router-dom';

import "./Working.css"
export default function WorkingProcess() {
  return (
    <div className='working_main_div'>
        <h6 className='h6'>TO DO GOOD DESIGN</h6>
        <h1>OUR WORKING PROCESS</h1>
    <div className='Flex working-card' id="working-card">
    
      <div className='card-work'>
      <div className='Flex'><h1 className='working-icon Flex'>01</h1></div>
        <div>
          
        <h3>Idea & Design</h3>
        <p>With righteous indignation and works off beguiled demoralized charm.</p>
        </div>
        <div className='Flex icon-work'><FaBuilding/></div>
      </div>
      <div className='card-work'>
      <div className='Flex'><h1 className='working-icon Flex'>02</h1></div>
        <div><h3>Specification</h3>
        <p>Our power of choice is untrammelled and when nothing prevents.</p></div>
        <div className='Flex icon-work'><GiStabbedNote/></div>
      </div>
      <div className='card-work'>
      <div className='Flex '><h1 className='working-icon Flex'>03</h1></div>
      <div><h3>Execution</h3>
      <p>Wing to the claims of duty the obligations will frequently occur.</p></div>
      <div className='Flex icon-work'><FaReceipt/></div>
      </div>
    </div>
  
    </div>
  )
}
