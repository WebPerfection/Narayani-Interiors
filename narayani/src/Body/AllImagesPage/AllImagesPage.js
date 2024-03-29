import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "./AllImages.css";
import "../WoekHome/WorkHome.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useLocation, useParams } from "react-router-dom";
import MakeApoiment from "../MakeApoiment/MakeApoiment";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toggelModel } from "../../Redux/Action"
import Loading from "../Loading/Loading";
import { IoIosArrowForward } from "react-icons/io";
import Consult from "../../Consult/Consult";

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
  window.scrollTo(0, 0);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const currentURL =
    window.location.origin +
    window.location.pathname +
    window.location.search +
    window.location.hash;
  console.log(currentURL);
  const dispatch = useDispatch()
  const [data, setData] = useState("");
  const [more, setMore] = useState(false);
  const [loading, setLoading] = useState(true)
  const [cetegory, setCetegory] = useState("")
  useEffect(() => {
    cetegory && axios
      .get(`https://dull-lime-wombat-veil.cyclic.app/data?category=${cetegory}`)
      .then((res) => {
        setData(res.data.uploads);
      })
      .catch((err) => console.log(err));

  }, [cetegory]);


  useEffect(() => {

  })

  const { id } = useParams();
  const [heroImage, setHeroImage] = useState(0);
  const [onImage, setOnaImage] = useState(false);
  const [projectImages, setProjectImages] = useState("");
  const [allData, setAllData] = useState("");

  useEffect(() => {
    if(localStorage.getItem("adminAuthenticate")){
      setOnaImage(true);
    }
    else if (localStorage.getItem("Narayani-User") || heroImage === 0) {
      setOnaImage(true);
    } else {
      setOnaImage(false);
    }
  }, [heroImage, localStorage.getItem("Narayani-User")]);

  useEffect(() => {
    axios
      .get(`https://dull-lime-wombat-veil.cyclic.app/data/${id}`)
      .then((res) => {
        setProjectImages(res.data.images);
        setAllData(res.data);
        setHeroImage(0);
        setCetegory(res.data.category)
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }, [id]);
  const [consult,setConsult]=useState(false)
  const consultClick=()=>{
    setConsult(false)
  }
  const openModel = () => {
    // dispatch(toggelModel());
    setConsult(true)
  };
  return (
    <>
      <Navbar />
      <div>Hello world</div>
      <div className="pro-main" id="hero-main" >
        {loading ? <Loading /> : projectImages && (
          <div className="Flex" data-aos="zoom-in-up"  data-aos-offset="100">
            <div className="HeroImages-main-div">
              <div className="HeroImage">
                <img loading="lazy"
                  className={onImage ? "showHeroImage" : "hideHeroImage"}
                  src={projectImages[heroImage]}
                />
                <button
                  className={onImage ? "showImage" : "hide"}
                  onClick={() => dispatch(toggelModel())}
                >
                  Unlock
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
                    {more ? "Read less" : "Read more"}
                  </span>
                  <button className="HeroImage-button" onClick={openModel}>
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
                      <img src={el} loading="lazy" onClick={() => setHeroImage(i)} onContextMenu={(e) => e.preventDefault()} draggable="false" />
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
            <div className="heading-div">
              <h6 className="h6">Related Designs</h6>
              <h1 style={{ color: 'black' }}>Discover Our Stunning Design Creations</h1>
            </div>
            <div className="see-all-link">
              <Link to="/allCategory"> See All <IoIosArrowForward /></Link>
            </div>
            {data && (
              <Carousel
                swipeable={false}
                draggable={true}
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
                  <Link to={`/Images/${item._id}`} >
                    <img
                    loading="lazy"
                      className="img-work flex"
                      src={item.images[0]}
                      alt={`Image ${index + 1}`}
                      onContextMenu={(e) => e.preventDefault()} draggable="false"
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
      <Consult consult={consult} consultClick={consultClick}/>
    </>
  );
};

export default ProjectPage;
