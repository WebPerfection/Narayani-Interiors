import React, { useEffect, useState } from 'react';

import './WorkHome.css'; // Importing CSS file for styling
import Src1 from './HomePicData/05d1df601345c1f4cb568b2d73fd11fb.jpg'; // Importing image source files
import Src2 from './HomePicData/080b869d63bf3a9e43cbd100708d289c.jpg';
import Src3 from './HomePicData/098e1e070536917c681d7fd559f954f3.jpg';
import Src4 from './HomePicData/104f9416fc868523e4e63258402cd661.jpg';
import Src5 from './HomePicData/12cba461df45c94a46be11ce96d3d438.jpg';
import axios from "axios"
import Carousel from 'react-multi-carousel'; // Importing Carousel component
import 'react-multi-carousel/lib/styles.css'; // Importing Carousel styles
import { useDispatch, useSelector } from 'react-redux';
import { toggelModel } from '../../Redux/Action';
import { Link } from 'react-router-dom';

// Define responsive configuration for the Carousel component
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1199, min: 900 },
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

const WorkHome = () => {
  const [data,setData]=useState("") // Array of image sources
  const model=useSelector(store=>store)
  const dispatch=useDispatch()

  const openModel=()=>{
    dispatch(toggelModel())
    console.log("ch")
  }
  useEffect(()=>{
     axios.get("https://azure-hen-cap.cyclic.app/data")
     .then((res)=>setData(res.data.uploads))
     .catch((err)=>console.log(err))
  },[model])
  return (
    <div className='workHome-main-div'>
      <h6 className='h6'>Project Showcase</h6>
      <h1>Discover Our Latest Interior Design Masterpieces</h1>
      {
        data && <Carousel
        swipeable={false} // Disable swipe gestures for the Carousel
        draggable={true} // Enable dragging of Carousel items
        showDots={false} // Show navigation dots
        responsive={responsive} // Apply responsive configuration
        ssr={true} // Enable server-side rendering
        infinite={true} // Enable infinite looping of Carousel items
        autoPlay={true} // Enable automatic playback
        autoPlaySpeed={3000} // Set autoplay speed to 3 seconds
        keyBoardControl={true} // Enable keyboard navigation
        customTransition='all 2s' // Set custom transition for Carousel animations
        transitionDuration={2000} // Set transition duration to 2 seconds
        containerClass='carousel-container' // Set CSS class for the Carousel container
        removeArrowOnDeviceType={['tablet', 'mobile']} // Remove navigation arrows on specific device types
        dotListClass='custom-dot-list-style' // Set CSS class for the navigation dots
        itemClass='carousel-item-padding-40-px' // Set CSS class for Carousel items
      >
        { data.map((item, index) => (
          <Link to={`Images/${item._id}`}>
          <div onClick={openModel} className='project-img-parent' key={index}>
            <img className='img-work flex' src={item.images[0]} alt={`Image ${index + 1}`} draggable="false" /> 
          </div>
          </Link>
        ))}
      </Carousel>
      }
    </div>
  );
};

export default WorkHome;
