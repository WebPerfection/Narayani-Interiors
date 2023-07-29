import React from 'react';
import "./Working.css"
const WorkingProcess = () => {
  return (
    <div className='workingProcess'>
      <div className='heading-div'>
        <h6 className='h6' style={{ fontSize: "25px" }}>Crafting Exceptional Interiors</h6>
        <h1 style={{ color: 'black' }}>Our Streamlined Design Process</h1>

      </div>
      {/* <h1>UL timeline cards</h1> */}
      <ul>
        <li style={{ '--accent-color': '#41516C' }} data-aos="zoom-in-up" data-aos-offset="170">
          <div className="date">Step 1</div>
          <div className="title"> Embracing Your Vision
          </div>
          <div className="descr">We begin by understanding your requirements in detail, listening closely to your ideas, preferences, and aspirations. Your vision serves as the guiding light for the design journey ahead.</div>
        </li>
        <li style={{ '--accent-color': '#FBCA3E' }} data-aos="zoom-in-up" data-aos-offset="170">
          <div className="date">Step 2</div>
          <div className="title">Designing with Swiftness</div>
          <div className="descr">
            With creativity in our hearts and skill in our hands, we swiftly bring your ideas to life through captivating designs. Our team is dedicated to delivering concepts that resonate with your vision.</div>
        </li>
        <li style={{ '--accent-color': '#E24A68' }} data-aos="zoom-in-up" data-aos-offset="170">
          <div className="date">Step 3</div>
          <div className="title"> Budget-Friendly Estimates</div>
          <div className="descr">
            Transparency is our foundation. We provide detailed cost estimates that align with your budget, ensuring there are no surprises along the way. Your dream interior is within reach.</div>
        </li>
        <li style={{ '--accent-color': '#1B5F8C' }} data-aos="zoom-in-up" data-aos-offset="170">
          <div className="date">Step 4</div>
          <div className="title">Immersive 3D Designs</div>
          <div className="descr">
            Visualize your dream space in remarkable detail with our cutting-edge 3D designs. You'll have a crystal-clear preview of how your project will come to life.</div>
        </li>
        <li style={{ '--accent-color': '#4CADAD' }} data-aos="zoom-in-up" data-aos-offset="170">
          <div className="date">Step 5</div>
          <div className="title">Seamless Project Management</div>
          <div className="descr">
            From concept to completion, we handle the entire process with meticulous precision. Sit back and relax as we orchestrate every aspect of the project, delivering a seamless experience.</div>
        </li>
        <li style={{ '--accent-color': '#4CADAD' }} data-aos="zoom-in-up" data-aos-offset="170">
          <div className="date">Step 6</div>
          <div className="title">Punctual Delivery
          </div>
          <div className="descr">We understand the importance of time, and we value yours. Count on us for on-time delivery, ensuring your dream interiors materialize when you expect them</div>
        </li>
      </ul>

    </div>
  );
};

export default WorkingProcess;
