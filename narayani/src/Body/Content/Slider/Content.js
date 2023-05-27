import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { RiProjectorLine } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FaPaintRoller, FaLongArrowAltRight } from "react-icons/fa";
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
import MakeApoiment from '../../MakeApoiment/MakeApoiment';
import Testimonial from '../../Testimonial/Testimonial';

export default function Content() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [data, setData] = useState([
    isMobile ? {img:mobileImage1,text:"Unleash your creativity and bring your dream space to life. With our wide range of design options, there are no limits to what you can achieve.",heading:"Transform Your Interior Spaces"} : {img:desktopImage1,text:"Unleash your creativity and bring your dream space to life. With our wide range of design options, there are no limits to what you can achieve.",heading:"Transform Your Interior Spaces"},
    isMobile ? {img:mobileImage2,text:"Discover the perfect blend of style and functionality for your home. Our expert interior designers will create a space that reflects your unique taste and enhances your daily living experience.",heading:"Elevate Your Home Design"} : {img:desktopImage2,text:"Discover the perfect blend of style and functionality for your home. Our expert interior designers will create a space that reflects your unique taste and enhances your daily living experience.",heading:"Elevate Your Home Design"},
    isMobile ? {img:mobileImage3,text:"Experience the art of interior design like never before. Our team of professionals will curate a personalized space that showcases your individuality and creates a lasting impression..",heading:"Create Your Dream Space"} : {img:desktopImage3,text:"Experience the art of interior design like never before. Our team of professionals will curate a personalized space that showcases your individuality and creates a lasting impression.",heading:"Create Your Dream Space"},
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
      isMobile ? {img:mobileImage1,text:"Unleash your creativity and bring your dream space to life. With our wide range of design options, there are no limits to what you can achieve.",heading:"Transform Your Interior Spaces"} : {img:desktopImage1,text:"Unleash your creativity and bring your dream space to life. With our wide range of design options, there are no limits to what you can achieve.",heading:"Transform Your Interior Spaces"},
      isMobile ? {img:mobileImage2,text:"Discover the perfect blend of style and functionality for your home. Our expert interior designers will create a space that reflects your unique taste and enhances your daily living experience.",heading:"Elevate Your Home Design"} : {img:desktopImage2,text:"Discover the perfect blend of style and functionality for your home. Our expert interior designers will create a space that reflects your unique taste and enhances your daily living experience.",heading:"Elevate Your Home Design"},
      isMobile ? {img:mobileImage3,text:"Experience the art of interior design like never before. Our team of professionals will curate a personalized space that showcases your individuality and creates a lasting impression..",heading:"Create Your Dream Space"} : {img:desktopImage3,text:"Experience the art of interior design like never before. Our team of professionals will curate a personalized space that showcases your individuality and creates a lasting impression.",heading:"Create Your Dream Space"},
    ]);
  }, [isMobile]);

  return (
    <>
      <Carousel fade>
        {data.map((el) => (
          <Carousel.Item interval={1500} key={el}>
            <div className='main_container'>
              <div className='image_wrapper'>
                <img src={el.img} className="d-block w-100" alt="" draggable="false" />
              </div>
              <div className='heading_container'>
                <div className='heading_content'>
                  <h2 className='heading'>{el.heading}</h2>
                  <p className="text">{el.text}</p>
                  <button className='about_btn'>About Company <FaLongArrowAltRight /></button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className='Flex'>
        <div className='Flex concept-card' id="concept-card">
          <div>
            <div className='Flex'><h1 className='concept-icon'><AiOutlineAntDesign /></h1></div>
            <div>

              <h3>Concept Designs</h3>
              <p>"Unlock the Art of Innovation - Embrace Concepts that Inspire, Ignite, and Redefine the Boundaries of Design."</p>
            </div>
            <div><Link to="/">Read More <BsArrowRight className='arrow' /> </Link></div>
          </div>
          <div>
            <div className='Flex'><h1 className='concept-icon'><RiProjectorLine /></h1></div>
            <div><h3>Project Designs</h3>
              <p>"Embark on a Journey of Limitless Possibilities - Unleash the Power of Choice to Create the Best Designs."</p>
            </div>
            <div><Link to="/admin-page">Read More <BsArrowRight className='arrow' /></Link></div>
          </div>
          <div>
            <div className='Flex'><h1 className='concept-icon'><FaPaintRoller /></h1></div>
            <div><h3>Make Overs</h3>
              <p>Transformation Begins Here - Rediscover the Beauty of Spaces with Captivating Makeovers that Transcend Imagination and Create Lasting Impressions."</p></div>
            <div><Link>Read More <BsArrowRight className='arrow' /></Link></div>
          </div>
        </div>

      </div>
      <AbotCompany />
      <Work />
      <WorkHome />
      <WorkingProcess />
      <Testimonial/>
      <MakeApoiment />
    </>
  )
}




