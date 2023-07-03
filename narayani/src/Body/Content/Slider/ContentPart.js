import React from 'react'
import { RiProjectorLine } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FaPaintRoller } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function ContentPart() {
  return (
    <div className='Flex' >
        <div className='Flex concept-card' id="concept-card">
          <div>
            <div className='Flex' data-aos="fade-down" data-aos-offset="100"><h1 className='concept-icon'><AiOutlineAntDesign /></h1></div>
            <div data-aos="fade-down" >

              <h3>Contactless Experience</h3>
              <p>No stepping out. Design your home interiors from the safety and comfort of your home.</p>
            </div>
            <div data-aos="fade-down" ><Link to="/">Read More <BsArrowRight className='arrow' /> </Link></div>
          </div>
          <div>
            <div className='Flex' data-aos="fade-down" data-aos-offset="100"><h1 className='concept-icon'><RiProjectorLine /></h1></div>
            <div data-aos="fade-down" data-aos-offset="100"><h3>Live 3D Designs</h3>
              <p>Explore life-like 3D designs online that are made for your floor plan.</p>
            </div>
            <div data-aos="fade-down" data-aos-offset="100"><Link to="/admin-page" >Read More <BsArrowRight className='arrow' /></Link></div>
          </div>
          <div>
            <div className='Flex' data-aos="fade-down" data-aos-offset="100"><h1 className='concept-icon'><FaPaintRoller /></h1></div>
            <div data-aos="fade-down" data-aos-offset="100"><h3>Instant Pricing

            </h3>
              <p>Enjoy complete price transparency and stay within budget.</p></div>
            <div data-aos="fade-down" data-aos-offset="100"><Link>Read More <BsArrowRight className='arrow' /></Link></div>
          </div>
        </div>

      </div>
  )
}
