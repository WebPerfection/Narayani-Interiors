import React, { useEffect, useState } from "react";
import web from "./web2.png";
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
import axios from "axios";

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

  const [hid, setHid] = useState(false);
  const [refrence, setRefrence] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [eStimate, setEStimate] = useState(false);

  const [isChildOpen, setIsChildOpen] = useState(false);
  const [mainService, setMainService] = useState("");
  useEffect(() => {
    axios
      .get("https://dull-lime-wombat-veil.cyclic.app/main")
      .then((res) => setMainService(res.data))
      .catch((err) => console.log(err));
  }, []);
  const toggleChild = () => {
    setIsChildOpen((prevState) => !prevState);
  };
  if (refrence) {
    setTimeout(() => {
      setHid(!hid);
      setRefrence(false);
    }, 800);
  }

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
    <div>
      <div className="main">
        {/* NavBar */}
        <div className={isScrolled ? "blur" : "Container"}>
          <Link to="/">
            <div className="Img-div Flex">
              <img src={web} />
            </div>
          </Link>

          <div className="Button-div">
            <div>
              <Link to="/">
                <FaHouseUser />
                Home
              </Link>
            </div>
            <div>
              <Link to="/" style={{ gap: "0px" }}>
                <GiAutoRepair />
                <ParentItem title="Services">
                  <ul id="menu">
                    <li className="parent" id="hide"></li>
                    {mainService && mainService.map(el=><ParentItem key={el._id} title={el.smname}/>)}
                   
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
            {localStorage.getItem("adminAuthenticate") ? (
              <a href="/admin" target="_blank" rel="noopener noreferrer">
                <button className="estimate-bt">Admin</button>
              </a>
            ) : (
              <button onClick={openModel} className="estimate-bt">
                Get Estimate
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="navbar" id="main2">
        <nav>
          <div className="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <ul className="menu-items">
              <li>
                <Link
                  to="/"
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <FaHouseUser />
                  Home
                </Link>
              </li>

              <li>
                {" "}
                <span
                  onClick={toggleChild}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <GiAutoRepair />
                  Services {isChildOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
                <ul className={isChildOpen ? "open" : "ulService"}>
                 {mainService && mainService.map(el=> <li
                    style={{
                      marginBottom: "0px",
                      marginTop: "5px",
                      textAlign: "start",
                      borderBottom: "1px solid black",
                      paddingBottom: "5px",
                    }}
                  >
                    <Link to={`/allkitchen/${el.smname}`}> {el.smname}</Link>
                  </li>)}
                  {/* <li
                    style={{
                      marginBottom: "0px",
                      marginTop: "5px",
                      textAlign: "start",
                      borderBottom: "1px solid black",
                      paddingBottom: "5px",
                    }}
                  >
                    <Link to="/allkitchen/Kitchen"> Kitchen</Link>
                  </li>
                  <li
                    style={{
                      marginBottom: "0px",
                      marginTop: "5px",
                      textAlign: "start",
                      borderBottom: "1px solid black",
                      paddingBottom: "5px",
                    }}
                  >
                    <Link to="/allkitchen/Shop"> Shop</Link>
                  </li>
                  <li
                    style={{
                      marginBottom: "0px",
                      marginTop: "5px",
                      textAlign: "start",
                      paddingBottom: "5px",
                    }}
                  >
                    <Link to="/allkitchen/Office"> Office</Link>
                  </li> */}
                </ul>
              </li>
              <li>
                <Link
                  to="/get-In-Touch"
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <FaHandsHelping />
                  Get in touch
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutUs"
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <FaExclamationCircle />
                  About us
                </Link>
              </li>

              {localStorage.getItem("adminAuthenticate") ? (
                <a
                  href="/admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "17px", width: "100%" }}
                >
                  <button
                    className="estimate-bt"
                    style={{ fontSize: "17px", width: "100%" }}
                  >
                    Admin
                  </button>
                </a>
              ) : (
                <button
                  onClick={openModel}
                  className="estimate-bt"
                  style={{ fontSize: "17px" }}
                >
                  Get Estimate
                </button>
              )}
            </ul>
            <div style={{ top: "10px" }} className="logo">
              <Link to="/">
                <div className="Img-div Flex">
                  <img src={web} />
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
