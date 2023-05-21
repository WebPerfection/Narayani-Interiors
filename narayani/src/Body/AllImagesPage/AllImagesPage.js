// import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import "./AllImages.css"
// export default function AllImagesPage() {
//   return (
//     <>
//     
//     <div  className='Images-main-div'>
//         <img src="https://uploads-ssl.webflow.com/60efba8513f75e3dcecac222/60f7b957deb0a6e94f079488_5e9dadc9-81f3-4d7e-bd7a-817738f3f2bc.jpg"/>
//     </div>
//     
//     </>
//   )
// }

import React, { useState } from 'react';
import MakeApoiment from '../MakeApoiment/MakeApoiment';

const ProjectPage = () => {
  const [heroImage, setHeroImage] = useState('https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg');
  const [projectImages, setProjectImages] = useState([
    'https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg',
    'https://t4.ftcdn.net/jpg/05/71/27/35/360_F_571273548_6cSIo7Cqwjv82EHk3MP8Nsv2NZb6Ht3H.jpg',
    'https://us.123rf.com/450wm/shushanto/shushanto2209/shushanto220900703/191842443-destruction-of-planets-concept-art-illustration-background-image.jpg?ver=6',
    'https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg',
    // Add more image URLs as needed
  ]);

  const handleClick = (image) => {
    setHeroImage(image);
    console.log("click")
  };

  return (
    <>
    <Navbar/>
    <div>Hello world</div>
    <div className='pro-main'>
    <div className="project-container">
      <div className="hero-container">
        <img
          className="hero-image"
          key={heroImage} // Add a unique key to trigger the animation
          src={heroImage}
          alt="Hero Image"
        />
      </div>

      <div className="thumbnail-container">
        {projectImages.map((image, index) => (
          <img
            key={index}
            className="thumbnail-image"
            src={image}
            alt={`Project Image ${index}`}
            onClick={() => handleClick(image)}
          />
        ))}
      </div>
    </div>
    <div>Reference Images</div>
    </div>
    <MakeApoiment/>
    <Footer/>
    </>
  );
};

export default ProjectPage;
