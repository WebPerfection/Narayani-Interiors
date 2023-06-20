import React from "react";
import Image1 from "../ImageData/footer-img/gallery-2.jpg";
import Image2 from "../ImageData/footer-img/gallery-3.jpg";
import Image3 from "../ImageData/footer-img/gallery-4.jpg";
import logo from "../Navbar/web.png";
import "./Footer.css";
import "../Navbar/Navbar.css";

export default function Footer() {
  return (
    <footer>
      <div className="row primary">
        <div className="column about">
          <h3 className="footer_h3">Narayni- Interior</h3>
          <p>
            Welcome to Narayni-Interior, your premier destination for exquisite
            interior design solutions. We strive to create spaces that inspire,
            captivate, and transform your vision into reality. Our team of
            skilled professionals is dedicated to delivering exceptional design
            concepts and unmatched craftsmanship for residential and commercial
            projects alike.
          </p>
          <div className="Social-main">
            <h3 className="footer_h3">Social Media</h3>
            <div className="social">
              <i className="fa-brands fa-facebook-square"></i>
              <i className="fa-brands fa-instagram-square"></i>
              <i className="fa-brands fa-whatsapp-square"></i>
            </div>
          </div>
        </div>
        <div className="footer-all-links Flex">
          <div className="column links Explore">
            <h3 className="footer_h3">Explore</h3>
            <ul className="footer_ul-explore footer_ul">
              <li>
                <a href="#faq">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#cookies-policy">Cookies Policy</a>
              </li>
              <li>
                <a href="#terms-of-services">Terms of Service</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>
          <div className="column links">
            <h3 className="footer_h3">Connect With Us</h3>
            <ul className="footer_ul">
              <li>
                <a href="#faq">Email: ankitjewrajka1234@gmail.com</a>
              </li>
              <li>
                <a href="#cookies-policy">Phone: +917670834090</a>
              </li>
              <li>
                <a href="#terms-of-services">
                  Address: <i>Ranchi (834001) 4A, Virdavan Apartment</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="column subscribe">
          <h3 className="footer_h3">Newsletter</h3>
          <div>
            <input className='footer_input' type="email" placeholder="Your email id here" />
            <button className='footer_bt'>Subscribe</button>
          </div>
        </div> */}
      </div>

      <div className="row copyright">
        <div className="footer-menu">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
          <a href="">Social</a>
        </div>
        {/* <p>© 2023 Narayni-Interior. All rights reserved.</p> */}
      </div>
    </footer>
  );
}
