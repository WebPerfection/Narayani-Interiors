import React, { useEffect, useState } from "react";
import web from "./web.png";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbPhoneCall } from "react-icons/tb";
import {
  FaExclamationCircle,
  FaHandsHelping,
  FaHouseUser,
  FaArrowRight,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { IoEarthOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { toggelModel } from "../Redux/Action";
import { GiAutoRepair } from "react-icons/gi";
import "./dropDown.css";

const ParentItem = ({ title, children }) => (
  <li className="parent">
    <Link to={`/allkitchen/${title}`}>{title}</Link>
    <ul className="child">{children}</ul>
  </li>
);

// const ChildItem = ({ title }) => (
//   <li className="children">
//     <a href="#">{title}</a>
//   </li>
// );

// const ExpandIcon = () => <span className="expand">&raquo;</span>;

export default function Navbar() {
  const model = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log(model);
  const [ham, setHam] = useState(false);
  const [hid, setHid] = useState(false);
  const [refrence, setRefrence] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [eStimate, setEStimate] = useState(false);
  const [up, setUp] = useState(false)
  const [start, setStart] = useState(false);

  if (refrence) {
    setTimeout(() => {
      setHid(!hid);
      setRefrence(false);
    }, 800);
  }
  const move = () => {
    setTimeout(() => {
      setScroll(!scroll);
      console.log("cheak");
    }, 800);
  };
  console.log(scroll);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    if (window.scrollY > 140) {
      setEStimate(true);
    } else {
      setEStimate(false);
    }
  };


  const openModel = () => {
    dispatch(toggelModel());
  };

  // attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="main">
        {/* NavBar */}
        <div className={isScrolled ? "blur" : "Container"}>
          <Link to="/">
            <div className="Img-div Flex">
              <img src={web} />
              <h4>
                Narayni-Interior
              </h4>
            </div>
          </Link>

          <div className="Flex" id="hamburger">
            {ham ? (
              <div className="h21" style={{ margin: 'auto' }}>
                <button
                  disabled={scroll ? false : true}
                  onClick={() => {
                    setHam(false);
                    setRefrence(true);
                    move();
                  }}
                >
                  <FaArrowRight className="bg" />
                </button>
              </div>
            ) : (
              <div className="h2" style={{ margin: 'auto' }}>
                <button
                  disabled={scroll ? true : false}
                  onClick={() => {
                    setHam(true);
                    setHid(!hid);
                    setStart(true);
                    move();
                  }}
                >
                  <GiHamburgerMenu className="bg" />
                </button>
              </div>
            )}
          </div>

          <div className="Button-div">
            <div>
              <Link to="/">
                <FaHouseUser />
                Home
              </Link>
            </div>
            <div
            >
              <Link to="/" style={{ gap: "0px" }}>
                <GiAutoRepair />
                <ParentItem title="Services">

                  <ul id="menu">
                    <li className="parent"  id="hide">
                      
                    </li>
                    <ParentItem title="Room">
                      {/* <ChildItem title="Bed Room" />
                      <ChildItem title="Guest Room" />
                      <ChildItem title="Child Room" /> */}
                    </ParentItem>

                    <ParentItem title="Kitchen"></ParentItem>

                    {/* <ChildItem title="Modular Kitchen" />
                      <ChildItem title="L-Shape Kitchen" />
                      <ChildItem title="Simple Kitchen" /> */}

                    <ParentItem title="Shop" ></ParentItem>
                    <ParentItem title="Office" ></ParentItem>
                  </ul>
                </ParentItem>
              </Link>
            </div>

            <div>
              <Link to="/get-In-Touch">
                <FaHandsHelping />
                Get in touch
              </Link>
            </div>
            <div>
              <Link to="/aboutUs">
                <FaExclamationCircle />
                About us
              </Link>
            </div>
          </div>
        </div>
        {/* Contact Navbar */}
        <div className="sec-Nav Flex" data-aos="flip-down">
          <div>
            <h1>
              <IoEarthOutline />
            </h1>
            <div className="Flex">
              <h2>Ranchi (834001)</h2>
              <h5>4A, Virdavan Apartment</h5>
            </div>
          </div>
          <div
            onClick={() => {
              const phoneNumber = "+917670834090"; // replace with your desired phone number
              window.location.href = `tel:${phoneNumber}`;
            }}
          >
            <h1>
              <TbPhoneCall />
            </h1>
            <div className="Flex">
              <h2> +91 7670834090</h2>
              <h5>Mon - Friday: 9.00 to 18.00</h5>
            </div>
          </div>
          <div
            id="email-div"
            onClick={() => {
              const emailAddress = "ankitjewrajka1234@gmail.com"; // replace with your email address
              window.open(`mailto:${emailAddress}`, "_blank");
            }}
          >
            <h1>
              <GoMail />
            </h1>
            <div className="Flex">
              <h2>ankitjewrajka1234@gmail.com</h2>
              <h5>Mon - Friday </h5>
            </div>
          </div>
          <div className="Flex" id="icon-div">
            {localStorage.getItem("adminAuthenticate")?<Link to="/admin">
            <button  className="estimate-bt">
              Admin
            </button></Link>:<button onClick={openModel} className="estimate-bt">
              Get Estimate
            </button>}
            
          </div>
        </div>
      </div>
      {start && (
        <div
          className={ham ? "vis" : "smallscreen"}
          style={{ display: hid ? "none" : "" }}
        >
          <div>
            <Link to="/">
              <FaHouseUser />
              Home
            </Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} onClick={() => setUp(!up)}>
            <Link>
              <GiAutoRepair />
              Services
            </Link>
            {up ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {up ? <> <div className="service-mob">
            <Link to="/allkitchen/Room">
              Room
            </Link>
          </div>
            <div className="service-mob">
              <Link to="/allkitchen/Kitchen">
                Kitchen
              </Link>
            </div>
            <div className="service-mob">
              <Link to="/allkitchen/Shop">
                Shop
              </Link>
            </div>
            <div className="service-mob"
            >
              <Link to="/allkitchen/Office">
                Office
              </Link>
            </div></> : ""}
          <div>
            <Link to="/aboutUs">
              <FaExclamationCircle />
              About us
            </Link>
          </div>
          <div>
            <Link to="/get-In-Touch">
              <FaHandsHelping />
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
