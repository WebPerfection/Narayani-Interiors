import React, { useState, useEffect } from 'react';
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
import desktopImage1 from '../../../ImageData/v1-1.jpg';
import desktopImage2 from '../../../ImageData/v1-2.jpg';
import desktopImage3 from '../../../ImageData/v1-3.jpg';
import mobileImage1 from '../../../ImageData/mobile-v1-1.jpg';
import mobileImage2 from '../../../ImageData/mobile-v1-2.jpg';
import mobileImage3 from '../../../ImageData/mobile-v1-3.jpg';
export default function Content() {const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [data, setData] = useState([
    isMobile ? mobileImage1 : desktopImage1,
    isMobile ? mobileImage2 : desktopImage2,
    isMobile ? mobileImage3 : desktopImage3,
  ]); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setData([
      isMobile ? mobileImage1 : desktopImage1,
      isMobile ? mobileImage2 : desktopImage2,
      isMobile ? mobileImage3 : desktopImage3,
    ]);
  }, [isMobile]);
  return (
    <>
    <Carousel fade>
        {data.map((el) => (
          <Carousel.Item interval={1500}>
            <img src={el} className="d-block w-100" alt="" />
          </Carousel.Item>
        ))}
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




