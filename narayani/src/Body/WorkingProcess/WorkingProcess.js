import React from 'react';
import "./Working.css"
const WorkingProcess = () => {
  return (
    <div className='workingProcess'>
      <div className='heading-div'>
        <h6 className='h6' style={{fontSize:"25px    "}} >TO DO GOOD DESIGN</h6>
        <h1 style={{ color: 'black' }}>OUR WORKING PROCESS</h1>
      </div>
      {/* <h1>UL timeline cards</h1> */}
      <ul>
        <li style={{ '--accent-color': '#41516C' }} data-aos="zoom-in-up" data-aos-offset="170">
          <div className="date">Step 1</div>
          <div className="title">Understand the requirement in detail</div>
          {/* <div className="descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!</div> */}
        </li>
        <li style={{ '--accent-color': '#FBCA3E' }} data-aos="zoom-in-up" data-aos-offset="170">
          <div className="date">Step 2</div>
          <div className="title">Provide designs at lightning fast speed</div>
          {/* <div className="descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.</div> */}
        </li>
        <li style={{ '--accent-color': '#E24A68' }} data-aos="zoom-in-up" data-aos-offset="170">
          <div className="date">Step 3</div>
          <div className="title">Estimate cost suitable to your budget</div>
          {/* <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic.</div> */}
        </li>
        <li style={{ '--accent-color': '#1B5F8C' }} data-aos="zoom-in-up" data-aos-offset="170">
          <div className="date">Step 4</div>
          <div className="title">Close 3D designs</div>
          {/* <div className="descr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.</div> */}
        </li>
        <li style={{ '--accent-color': '#4CADAD' }} data-aos="zoom-in-up" data-aos-offset="170">
          <div className="date">Step 5</div>
          <div className="title">Manage seamless execution of project</div>
          {/* <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div> */}
        </li>
        <li style={{ '--accent-color': '#4CADAD' }} data-aos="zoom-in-up" data-aos-offset="170">
          <div className="date">Step 6</div>
          <div className="title">On-Time delivery</div>
          {/* <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div> */}
        </li>
      </ul>
    
    </div>
  );
};

export default WorkingProcess;
