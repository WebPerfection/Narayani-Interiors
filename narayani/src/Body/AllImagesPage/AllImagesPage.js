import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "./AllImages.css";
import "../WoekHome/WorkHome.css"; // Importing CSS file for styling
import Src1 from "../WoekHome/HomePicData/05d1df601345c1f4cb568b2d73fd11fb.jpg"; // Importing image source files
import Src2 from "../WoekHome/HomePicData/080b869d63bf3a9e43cbd100708d289c.jpg";
import Src3 from "../WoekHome/HomePicData/098e1e070536917c681d7fd559f954f3.jpg";
import Src4 from "../WoekHome/HomePicData/104f9416fc868523e4e63258402cd661.jpg";
import Src5 from "../WoekHome/HomePicData/12cba461df45c94a46be11ce96d3d438.jpg";
import Carousel from "react-multi-carousel"; // Importing Carousel component
import "react-multi-carousel/lib/styles.css"; // Importing Carousel styles
import { useDispatch, useSelector } from "react-redux";
import { toggelModel } from "../../Redux/Action";
import { Link } from "react-router-dom";
import MakeApoiment from "../MakeApoiment/MakeApoiment"; // Importing MakeApoiment component

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1199, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 899, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 599, min: 0 },
    items: 1,
  },
};

const ProjectPage = () => {
  const data = [Src1, Src2, Src3, Src4, Src5, Src1, Src2, Src3, Src4, Src5]; // Array of image sources
  const model = useSelector((store) => store);
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

  const [heroImage, setHeroImage] = useState(1);
  const [onImage,setOnaImage]=useState(false)
  const [projectImages, setProjectImages] = useState([
    "https://super.homelane.com/MRJIOM5524_main-1448357087_navarino-straight-wardrobe.jpg",
    "https://super.homelane.com/MAVUWZ5233_main-1446729327_sicily-straight-wardrobe.jpg",
    "https://super.homelane.com/MHCYUG5447_main-1448017011_larissa-straight-wardrobe.jpg",
    "https://super.homelane.com/MGOPCR5356_srp-1447754346_title.jpg",
    "https://super.homelane.com/MAVUWZ5233_srp-1446729327_sicily-straight-wardrobe.jpg",
    "https://super.homelane.com/MIKRKX6066_srp-1451369844_severny-straight-wardrobe.jpg",
    "https://super.homelane.com/MIKRKX6066_srp-1451369844_severny-straight-wardrobe.jpg",
    // Add more image URLs as needed
  ]);
 useEffect(()=>{
  if(localStorage.getItem("narayniUser") || heroImage===0){
    setOnaImage(true)
  }
  else{
    setOnaImage(false)
  }
 },[heroImage])
  console.log(localStorage.getItem("narayniUser"));
 localStorage.setItem("narayniUser", "ashiq");
  return (
    <>
      <Navbar />
      <div>Hello world</div>
      <div className="pro-main">
        <div className="HeroImages-main-div">
          <div className="HeroImage">
            <img className={onImage ? "showHeroImage":"hideHeroImage"} src={projectImages[heroImage]} />
            <button className={onImage ? "showImage":"hide"}>Click</button>
          </div>
          <div className="HeroImage-content-div">
            <div className="HeroImage-description">
              <h5>Navarino Straight Hinged Door Wardrobe</h5>
              <p>
                Sleek and sophisticated, this bedroom decor is all about style
                on a budget. Gorgeous grains of teak wood and ash wood add a
                touch of nature to this straight 3 door wardrobe design. This is
                a warm, cosy bedroom that you’ll love to call your own! Continue
                the colour narrative all around the room for a cohesive look
              </p>
              <button className="HeroImage-button">
                BOOK FREE DESIGN SESSION
              </button>
              <button>Wishlist</button>
              <div>
                <h5>Specification</h5>
                <p>size|9'</p>
              </div>
              <div className="related-images Flex">
                {projectImages.map((el, i) => (
                  <img src={el} onClick={() => setHeroImage(i)} />
                ))}
              </div>
            </div>
            <div className="HeroImage-related-div"></div>
          </div>
        </div>
        <div className="related-item">
          <div className="workHome-main-div">
            <h6 className="h6">Related Designs</h6>
            <h1>Discover Our Stunning Design Creations</h1>
            <div className="see-all-link">
              <a href="/your-page-url">See All</a>
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
              customTransition="all 2s" // Set custom transition for Carousel animations
              transitionDuration={2000} // Set transition duration to 2 seconds
              containerClass="carousel-container" // Set CSS class for the Carousel container
              removeArrowOnDeviceType={["tablet", "mobile"]} // Remove navigation arrows on specific device types
              dotListClass="custom-dot-list-style" // Set CSS class for the navigation dots
              itemClass="carousel-item-padding-40-px" // Set CSS class for Carousel items
            >
              {data.map((item, index) => (
                <Link to="Images" key={index}>
                  <div onClick={openModel} className="project-img-parent">
                    <img
                      className="img-work flex"
                      src={item}
                      alt={`Image ${index + 1}`}
                      draggable="false"
                    />
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
