import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "./AllImages.css";
import "../WoekHome/WorkHome.css";
import Src1 from "../WoekHome/HomePicData/05d1df601345c1f4cb568b2d73fd11fb.jpg";
import Src2 from "../WoekHome/HomePicData/080b869d63bf3a9e43cbd100708d289c.jpg";
import Src3 from "../WoekHome/HomePicData/098e1e070536917c681d7fd559f954f3.jpg";
import Src4 from "../WoekHome/HomePicData/104f9416fc868523e4e63258402cd661.jpg";
import Src5 from "../WoekHome/HomePicData/12cba461df45c94a46be11ce96d3d438.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { toggelModel } from "../../Redux/Action";
import {Link, useLocation, useParams} from "react-router-dom";
import MakeApoiment from "../MakeApoiment/MakeApoiment";
import axios from "axios";

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
  const { pathname } = useLocation();
  const location = useLocation();
  const [user, setUser] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const currentURL =
  window.location.origin +
  window.location.pathname +
  window.location.search +
  window.location.hash;
console.log(currentURL)
 
  
  const [data, setData] = useState("");
  const [more, setMore] = useState(false);
  const model = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getdata`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));

      axios.post("http://localhost:5000/posturl",{url:currentURL})
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
  }, []);
const loginWithGoogle=()=>{
  axios.patch("http://localhost:5000/update",{url:currentURL})
  .then((res)=>{
    window.location.href="http://localhost:5000/auth/google"
    localStorage.setItem("narayniUser","Authenticate")
  })
  .catch((err)=>console.log(err))

  
}
  const openModel = () => {
    dispatch(toggelModel());
    console.log("ch");
  };

  const { id } = useParams();
  const [heroImage, setHeroImage] = useState(0);
  const [onImage, setOnaImage] = useState(false);
  const [projectImages, setProjectImages] = useState("");
  const [allData, setAllData] = useState("");

  useEffect(() => {
    if (localStorage.getItem("narayniUser") || heroImage === 0) {
      setOnaImage(true);
    } else {
      setOnaImage(false);
    }
  }, [heroImage]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getdata/${id}`)
      .then((res) => {
        setProjectImages(res.data.images);
        setAllData(res.data);
        setHeroImage(0)
      })
      .catch((err) => console.log(err));
  }, [id]);



  return (
    <>
      <Navbar />
      <div>Hello world</div>
      <div className="pro-main">
        {projectImages && (
          <div className="Flex">
            <div className="HeroImages-main-div">
              <div className="HeroImage">
                <img
                  className={onImage ? "showHeroImage" : "hideHeroImage"}
                  src={projectImages[heroImage]}
                />
                <button
                  className={onImage ? "showImage" : "hide"}
                  onClick={loginWithGoogle}
                >
                  Click
                </button>
              </div>
              <div className="HeroImage-content-div">
                <div className="HeroImage-description">
                  <h5>{allData.title}</h5>
                  <div className={more ? "" : "description-div"}>
                    <span
                      dangerouslySetInnerHTML={{ __html: allData.description }}
                    />
                  </div>
                  <span
                    className={more ? "more" : "less"}
                    onClick={() => setMore(!more)}
                  >
                    {more ? "less" : "more"}
                  </span>
                  <button className="HeroImage-button">
                    BOOK FREE DESIGN SESSION
                  </button>
                  <div>
                    <h5>Specification</h5>
                    <p>
                      size -{" "}
                      {`${allData.size._length} X ${allData.size._width}`}
                    </p>
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
          </div>
        )}
        <div className="related-item">
          <div className="workHome-main-div">
            <h6 className="h6">Related Designs</h6>
            <h1>Discover Our Stunning Design Creations</h1>
            <div className="see-all-link">
              <a href="/your-page-url">See All</a>
            </div>
            {data && (
              <Carousel
                swipeable={false}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all 2s"
                transitionDuration={2000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {data.map((item, index) => (
                  <Link to={`/Images/${item._id}`}
                  >
                    <img
                      className="img-work flex"
                      src={item.images[0]}
                      alt={`Image ${index + 1}`}
                      draggable="false"
                    />
                  </Link>
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </div>
      <MakeApoiment />
      <Footer />
    </>
  );
};

export default ProjectPage;
