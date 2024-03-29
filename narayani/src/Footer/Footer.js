import React from "react";
import "./Footer.css";
import "../Navbar/Navbar.css";
import log from '../Navbar/web1.png'
export default function Footer() {
  return (
    <footer>
      <div className="row primary">
        <div className="column about">
          {/* <h3 className="footer_h3">Narayni- Interior</h3> */}
          <img style={{width:'50%'}} src={log}/>
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
              <a href="https://www.instagram.com/narayani.interiors/?igshid=YmM0MjE2YWMzOA%3D%3D" target="_blank"><i className="fa-brands fa-facebook-square"></i></a>
             <a href="https://www.instagram.com/narayani.interiors/?igshid=YmM0MjE2YWMzOA%3D%3D" target="_blank"> <i className="fa-brands fa-instagram-square"></i></a>
             <a onClick={() => {
                        const phoneNumber = "+917670834090"; // replace with your WhatsApp contact's phone number
                        window.open(
                            `https://api.whatsapp.com/send?phone=${phoneNumber}`,
                            "_blank"
                        );
                    }}> <i className="fa-brands fa-whatsapp-square"></i></a>
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
                <a href="#cookies-policy">Phone: +91 7670834090</a>
              </li>
              <li>
                <a href="#terms-of-services">
                  Address: <i>Ranchi (834001), 4A Virdavan Apartment.</i>
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

     
    </footer>
  );
}
