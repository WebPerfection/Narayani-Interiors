import React from 'react';
import Image1 from '../ImageData/footer-img/gallery-2.jpg';
import Image2 from '../ImageData/footer-img/gallery-3.jpg';
import Image3 from '../ImageData/footer-img/gallery-4.jpg';
import logo from '../Navbar/web.png';
import './Footer.css';
import '../Navbar/Navbar.css'

export default function Footer() {
  return (
    <footer>
      <div class="row primary">
        <div class="column about">
          <h3 class="footer_h3">Foolish Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            voluptatem corporis error non,
          </p>
          <div class="social">
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-instagram-square"></i>
            <i class="fa-brands fa-twitter-square"></i>
            <i class="fa-brands fa-youtube-square"></i>
            <i class="fa-brands fa-whatsapp-square"></i>
          </div>
        </div>
        <div className='Flex'>
          <div class="column links">
            <h3 class="footer_h3">Some Links</h3>
            <ul className='footer_ul'>
              <li>
                <a href="#faq">F.A.Q</a>
              </li>
              <li>
                <a href="#cookies-policy">Cookies Policy</a>
              </li>
              <li>
                <a href="#terms-of-services">Terms Of Service</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>

            </ul>
          </div>
          <div class="column links">
            <h3 class="footer_h3">Some Links</h3>
            <ul className='footer_ul'>
              <li>
                <a href="#faq">F.A.Q</a>
              </li>
              <li>
                <a href="#cookies-policy">Cookies Policy</a>
              </li>
              <li>
                <a href="#terms-of-services">Terms Of Service</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>

            </ul>
          </div>
        </div>
        <div class="column subscribe">
          <h3 class="footer_h3">Newsletter</h3>
          <div>
            <input className='footer_input' type="email" placeholder="Your email id here" />
            <button className='footer_bt'>Subscribe</button>
          </div>

        </div>
      </div>

      <div class="row copyright">
        <div class="footer-menu">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
          <a href="">Social</a>
        </div>
        <p>Copyright &copy; 2021 Foolish Developer</p>
      </div>
    </footer>
  );
}
