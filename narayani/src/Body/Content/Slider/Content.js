import React from 'react'
import SrcImage1 from "../../../ImageData/v1-1.jpg"
import SrcImage2 from "../../../ImageData/v1-2.jpg"
import SrcImage3 from "../../../ImageData/v1-3.jpg"
import Carousel from 'react-bootstrap/Carousel';
import { RiProjectorLine } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FaPaintRoller } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Content.css"
import { Link } from 'react-router-dom';
import AbotCompany from '../AboutCompany/AbotCompany';
import Work from '../Work/Work';
import WorkHome from '../../WoekHome/WorkHome';
import WorkingProcess from '../../WorkingProcess/WorkingProcess';
export default function Content() {
  const data=[SrcImage1,SrcImage2,SrcImage3]
  return (
    <>
    <Carousel  fade>
      {data.map((el)=><Carousel.Item interval={1500}>
        <img src={el} className="d-block w-100"/>
      </Carousel.Item>)}
     
    </Carousel>
    <div className='Flex'>
    <div className='Flex concept-card' id="concept-card">
      <div>
      <div className='Flex'><h1 className='concept-icon'><AiOutlineAntDesign/></h1></div>
        <div>
          
        <h3>Concept Designs</h3>
        <p>Indignation dislike who are beguile works & demoralized the charms.</p>
        </div>
        <div><Link to="/concept-designed">Read More <BsArrowRight className='arrow'/> </Link></div>
      </div>
      <div>
      <div className='Flex'><h1 className='concept-icon'><RiProjectorLine/></h1></div>
        <div><h3>Project Designs</h3>
        <p>Our power of choice is untrammelled and all nothing prevents best.</p></div>
        <div><Link>Read More <BsArrowRight className='arrow'/></Link></div>
      </div>
      <div>
      <div className='Flex'><h1 className='concept-icon'><FaPaintRoller/></h1></div>
      <div><h3>Make Overs</h3>
      <p>Every pleasure is to be welcomed & every circumstances & owing power.</p></div>
      <div><Link>Read More <BsArrowRight className='arrow'/></Link></div>
      </div>
    </div>
  
    </div>
    <AbotCompany/>
    <Work/>
    <WorkHome/>
    <WorkingProcess/>
    </>
  )
}




