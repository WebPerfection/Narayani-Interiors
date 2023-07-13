import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Content.css"
import {  FaLongArrowAltRight } from "react-icons/fa";
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
import ContentPart from './ContentPart';

export default function Content() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [data, setData] = useState([
    isMobile ? { img: mobileImage1, text: "Unleash your creativity and bring your dream space to life. With our wide range of design options, there are no limits to what you can achieve.", heading: "Transform Your Interior Spaces" } : { img: desktopImage1, text: "Unleash your creativity and bring your dream space to life. With our wide range of design options, there are no limits to what you can achieve.", heading: "Transform Your Interior Spaces" },
    isMobile ? { img: mobileImage2, text: "Discover the perfect blend of style and functionality for your home. Our expert interior designers will create a space that reflects your unique taste and enhances your daily living experience.", heading: "Elevate Your Home Design" } : { img: desktopImage2, text: "Discover the perfect blend of style and functionality for your home. Our expert interior designers will create a space that reflects your unique taste and enhances your daily living experience.", heading: "Elevate Your Home Design" },
    isMobile ? { img: mobileImage3, text: "Experience the art of interior design like never before. Our team of professionals will curate a personalized space that showcases your individuality and creates a lasting impression..", heading: "Create Your Dream Space" } : { img: desktopImage3, text: "Experience the art of interior design like never before. Our team of professionals will curate a personalized space that showcases your individuality and creates a lasting impression.", heading: "Create Your Dream Space" },
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
      isMobile ? { img: mobileImage1, text: "Unleash your creativity and bring your dream space to life. With our wide range of design options, there are no limits to what you can achieve.", heading: "Transform Your Interior Spaces" } : { img: desktopImage1, text: "Unleash your creativity and bring your dream space to life. With our wide range of design options, there are no limits to what you can achieve.", heading: "Transform Your Interior Spaces" },
      isMobile ? { img: mobileImage2, text: "Discover the perfect blend of style and functionality for your home. Our expert interior designers will create a space that reflects your unique taste and enhances your daily living experience.", heading: "Elevate Your Home Design" } : { img: desktopImage2, text: "Discover the perfect blend of style and functionality for your home. Our expert interior designers will create a space that reflects your unique taste and enhances your daily living experience.", heading: "Elevate Your Home Design" },
      isMobile ? { img: mobileImage3, text: "Experience the art of interior design like never before. Our team of professionals will curate a personalized space that showcases your individuality and creates a lasting impression..", heading: "Create Your Dream Space" } : { img: desktopImage3, text: "Experience the art of interior design like never before. Our team of professionals will curate a personalized space that showcases your individuality and creates a lasting impression.", heading: "Create Your Dream Space" },
    ]);
  }, [isMobile]);

  return (
    <>
      <Carousel id="carouselExampleControls" fade data-aos="zoom-in-up" data-aos-offset="120">
        {data.map((el) => (
          <Carousel.Item interval={1500} key={el}>
            <div className='main_container'>
              <div className='image_wrapper' >
                <img src={el.img} loading="lazy" className="d-block w-100" alt="" draggable="false"  />
              </div>
              <div className='heading_container'>
                <div className='heading_content' >
                  <h2 className='heading' >{el.heading}</h2>
                  <p className="text">{el.text}</p>
                  <Link to="/aboutUs"><button className='about_btn'>About Company <FaLongArrowAltRight /></button></Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      
    </>
  )
}




