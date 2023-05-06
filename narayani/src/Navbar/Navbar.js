import React, { useEffect, useState } from "react";
import web from "./web.png";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbPhoneCall } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoEarthOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { ImWhatsapp } from "react-icons/im";
export default function Navbar() {
  const [ham, setHam] = useState(false);
  const [hid, setHid] = useState(false);
  const [refrence, setRefrence] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [start, setStart] = useState(false);
  const [drop, setDrop] = useState(true);
  const [dropDown, setDropDown] = useState(false);

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
  const up = () => {
    setTimeout(() => {
      setDrop(true)
    }, 800)
  }
  console.log(scroll);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
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
          <div className="Img-div">
            <img src={web} />
            <div>
              <h3>
                <em>Web </em>
                <span>
                  <em>Perfection.</em>
                </span>
              </h3>
              {/* <p>Perfection is in our code.</p> */}
            </div>
          </div>
          {ham ? (
            <div className="h21">
              <button
                disabled={scroll ? false : true}
                onClick={() => {
                  setHam(!ham);
                  setRefrence(true);
                  move();
                }}
              >
                <FaArrowRight className="bg" />
              </button>
            </div>
          ) : (
            <div className="h2">
              <button
                disabled={scroll ? true : false}
                onClick={() => {
                  setHam(!ham);
                  setHid(!hid);
                  setStart(true);
                  move();
                }}
              >
                <GiHamburgerMenu className="bg" />
              </button>
            </div>
          )}

          <div className="Button-div">
            <div
              onMouseEnter={() => {
                setDropDown(true);
                setDrop(false);
              }}
              onMouseLeave={() => {
                setDropDown(false)
                up()
              }}
            >
              <Link to="/">Home</Link>
              <ul
                className={dropDown ? "ul" : "hideUl"}
                style={{ display: drop ? "none" : "" }}
              >
                <li>Servecess</li>
                <li>Awresh</li>
                <li>Roohi</li>
              </ul>
            </div>
            <Link to="/">About us</Link>
            <Link to="/">Contect</Link>
          </div>
        </div>
        {/* Contact Navbar */}
        <div className="sec-Nav Flex">
          <div><h1><IoEarthOutline /></h1><div className="Flex"><h2>U.P (Fatehpur 212601)</h2><h5>Flat 201, Reynolds Neck Str</h5></div></div>
          <div onClick={() => {
            const phoneNumber = '+918604846089'; // replace with your desired phone number
            window.location.href = `tel:${phoneNumber}`;

          }}><h1><TbPhoneCall /></h1><div className="Flex"><h2> +91 88888888</h2><h5>Mon - Friday: 9.00 to 18.00</h5></div></div>
          <div className="email-div" onClick={() => {
            const emailAddress = 'moa16259@gmail.com'; // replace with your email address
            window.open(`mailto:${emailAddress}`, '_blank');
          }}><h1><GoMail /></h1><div className="Flex"><h2>perfectionweb5@gmail.com</h2><h5>Mon - Friday: 9.00 to 18.00</h5></div></div>
          <div className="Flex" id="icon-div"><h1 id="icon-style" onClick={() => {
            const phoneNumber = '+918604846089'; // replace with your WhatsApp contact's phone number
            window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
          }}><ImWhatsapp /></h1></div> 
        </div>
      </div>
      {start && (
        <div
          className={ham ? "vis" : "smallscreen"}
          style={{ display: hid ? "none" : "" }}
        >
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/">About us</Link>
          </div>
          <div>
            <Link to="/">Contect</Link>
          </div>
        </div>
      )}
    </>
  );
}
