import React from 'react';

import "./WorkHome.css"
import Src1 from "./HomePicData/05d1df601345c1f4cb568b2d73fd11fb.jpg"
import Src2 from "./HomePicData/080b869d63bf3a9e43cbd100708d289c.jpg"
import Src3 from "./HomePicData/098e1e070536917c681d7fd559f954f3.jpg"
import Src4 from "./HomePicData/104f9416fc868523e4e63258402cd661.jpg"
import Src5 from "./HomePicData/12cba461df45c94a46be11ce96d3d438.jpg"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1200 },
    items: 4
  },
  desktop: {
    breakpoint: {  max: 1199, min: 900 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 899, min: 600 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 599, min: 0 },
    items: 1
  }
};
// Usage example
const WorkHome = () => {
  const data=[Src1,Src2,Src3,Src4,Src5,Src1,Src2,Src3,Src4,Src5]
  return (
    
    
      <div className='workHome-main-div'>
        <h5>Project</h5>
        <h1>RECENTLY COMPLETED WORKS</h1>
        <Carousel  swipeable={false}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all 2s"
      transitionDuration={2000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px" >
      {data.map((item)=><img className='img-work Flex' src={item}/>)}
      </Carousel>
      </div>
    
    
  );
};

export default WorkHome;
