import React from 'react';
import Image1 from '../ImageData/footer-img/gallery-2.jpg';
import Image2 from '../ImageData/footer-img/gallery-3.jpg';
import Image3 from '../ImageData/footer-img/gallery-4.jpg';
import logo from '../Navbar/web.png';
import './Footer.css';
import '../Navbar/Navbar.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-container ">
          <div >
              <img src={logo} alt="Awesome Logo" className="logo" />
              <h2>
                <em>Web </em>
                <em>Perfection.</em>

              </h2>
            </div>
            <div>
              <h3>Address</h3>
              <p className="address">Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</p>
            </div>
            <div>

              <h3>PHONE</h3>
              <p className="phone"> +324 123 45 978 & 01</p>
              <p className="hours">Mon - Friday: 9.00am to 6.00pm</p>
            </div>
            <div>

              <h3>EMAIL</h3>
              <p className="email">abc@yourdomain.com</p>
              <p className="email">crystalocareer@gmail.com</p>
            </div>
        </div>

        <div>
          <div className="services-container">
            <h1>Services</h1>
          </div >
          <div className="services-container">
            <ul>
              <li className='toggle' id='Hover'><a >Concept Design</a></li>
              <li className='toggle' id='Hover'><a>Concept Design</a></li>
              <li className='toggle' id='Hover'><a>Concept Design</a></li>
              <li className='toggle' id='Hover'><a>Concept Design</a></li>
              <li className='toggle' id='Hover'><a>Concept Design</a></li>
              <li className='toggle' id='Hover'><a>Concept Design</a></li>
            </ul>
          </div>
        </div>

        <div className='News'>
          <div>
            <h1>Recent News</h1>
          </div>
          <div className="news-container">
            <div className="news-item">
              <img src={Image1} alt="Awesome Image" />
              <p>March 10, 2019</p>
              <p>Creating drama and feeling with...</p>
            </div>
            <div className="news-item">
              <img src={Image2} alt="Awesome Image" />
              <p>March 02, 2019</p>
              <p>Wondering if interior design is dying...</p>
            </div>
            <div className="news-item">
              <img src={Image3} alt="Awesome Image" />
              <p>February 27, 2019</p>
              <p>Enjoy monsoon in comfort of your...</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
