import React from 'react';
import "./Working.css"
const WorkingProcess = () => {
  return (
    <div className='workingProcess'>
      <div className='heading-div'>
        <h6 className='h6' >TO DO GOOD DESIGN</h6>
        <h1 style={{ color: 'black' }}>OUR WORKING PROCESS</h1>
      </div>
      {/* <h1>UL timeline cards</h1> */}
      <ul>
        <li style={{ '--accent-color': '#41516C' }}>
          <div className="date">2002</div>
          <div className="title">Title 1</div>
          <div className="descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!</div>
        </li>
        <li style={{ '--accent-color': '#FBCA3E' }}>
          <div className="date">2007</div>
          <div className="title">Title 2</div>
          <div className="descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.</div>
        </li>
        <li style={{ '--accent-color': '#E24A68' }}>
          <div className="date">2012</div>
          <div className="title">Title 3</div>
          <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic.</div>
        </li>
        <li style={{ '--accent-color': '#1B5F8C' }}>
          <div className="date">2017</div>
          <div className="title">Title 4</div>
          <div className="descr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.</div>
        </li>
        <li style={{ '--accent-color': '#4CADAD' }}>
          <div className="date">2022</div>
          <div className="title">Title 5</div>
          <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div>
        </li>
      </ul>
      <div className="credits"><a target="_blank" href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm">inspired by</a></div>
    </div>
  );
};

export default WorkingProcess;
