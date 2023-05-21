import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import "./AllImages.css";
import '../WoekHome/WorkHome.css'; // Importing CSS file for styling
import Src1 from '../WoekHome/HomePicData/05d1df601345c1f4cb568b2d73fd11fb.jpg'; // Importing image source files
import Src2 from '../WoekHome/HomePicData/080b869d63bf3a9e43cbd100708d289c.jpg';
import Src3 from '../WoekHome/HomePicData/098e1e070536917c681d7fd559f954f3.jpg';
import Src4 from '../WoekHome/HomePicData/104f9416fc868523e4e63258402cd661.jpg';
import Src5 from '../WoekHome/HomePicData/12cba461df45c94a46be11ce96d3d438.jpg';
import Carousel from 'react-multi-carousel'; // Importing Carousel component
import 'react-multi-carousel/lib/styles.css'; // Importing Carousel styles
import { useDispatch, useSelector } from 'react-redux';
import { toggelModel } from '../../Redux/Action';
import { Link } from 'react-router-dom';
import MakeApoiment from '../MakeApoiment/MakeApoiment'; // Importing MakeApoiment component

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

const ProjectPage = () => {
  const data = [Src1, Src2, Src3, Src4, Src5, Src1, Src2, Src3, Src4, Src5]; // Array of image sources
  const model = useSelector(store => store);
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (image, index) => {
    setHeroImage(image);
    setActiveIndex(index); // Update the active thumbnail index
    console.log("click");
  };

  const openModel = () => {
    dispatch(toggelModel());
    console.log("ch");
  };

  const [heroImage, setHeroImage] = useState('https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg');
  const [projectImages, setProjectImages] = useState([
    'https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg',
    'https://t4.ftcdn.net/jpg/05/71/27/35/360_F_571273548_6cSIo7Cqwjv82EHk3MP8Nsv2NZb6Ht3H.jpg',
    'https://us.123rf.com/450wm/shushanto/shushanto2209/shushanto220900703/191842443-destruction-of-planets-concept-art-illustration-background-image.jpg?ver=6',
    'https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg',
    // Add more image URLs as needed
  ]);

  return (
    <>
      <Navbar />
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
                className={`thumbnail-image ${activeIndex === index ? 'active' : ''}`} // Add 'active' class to the active thumbnail
                src={image}
                alt={`Project Image ${index}`}
                onClick={() => handleClick(image, index)}
              />
            ))}
          </div>
        </div>
        <div className='related-item'>
          <div className='workHome-main-div'>
            <h6 className='h6'>Related Designs</h6>
            <h1>Discover Our Stunning Design Creations</h1>
            <div className="see-all-link">
              <a href="/your-page-url">
                See All
              </a>
            </div>
            <Carousel
              swipeable={false} // Disable swipe gestures for the Carousel
              draggable={true} // Enable dragging of Carousel items
              showDots={true} // Show navigation dots
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
              {data.map((item, index) => (
                <Link to="Images" key={index}>
                  <div onClick={openModel} className='project-img-parent'>
                    <img className='img-work flex' src={item} alt={`Image ${index + 1}`} draggable="false" />
                  </div>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <MakeApoiment />
      <Footer />
    </>
  );
};

export default ProjectPage;
