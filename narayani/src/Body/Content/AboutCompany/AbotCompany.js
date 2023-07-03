import React from "react";
import CompImag from "./about-image.jpg";
import "./AboutCompany.css";
export default function AbotCompany() {
  return (
    <div className="about-main Flex">
      <div className="about-main-div Flex">
        <div className="companyImag" data-aos="zoom-in-up" data-aos-offset="100">
          <img src={CompImag} loading="lazy" />
          <br></br>
          <div className="company-text" data-aos="zoom-in-up" data-aos-offset="100">

            <h5>Experiencd & Well knowledgeable Interior designers.</h5>
            <div><h6>Ankit Agarwal, <span className="span">CEO & Founder</span></h6></div>
          </div>
        </div>
        <div className="companyTitel" data-aos="zoom-in-up"  data-aos-offset="100">
          <h6 className="h6">About Us</h6>
          <h1>Experience the Essence of Exceptional Interior Design</h1>
          <p>
            {/* At our company, we are a dedicated and highly efficient team of interior designers. We take pride in creating captivating spaces that leave a lasting impression. Our passion for design knows no bounds, and we are committed to delivering extraordinary results.
            <br/>
            

            With a deep understanding of our clients' needs, we embark on a journey to transform their spaces into personalized works of art. We believe that every detail matters, from the selection of colors and textures to the careful placement of furniture and accessories.
            <br/>
            We denounce the ordinary and embrace innovation and creativity in all aspects of our work. Our approach is driven by a desire to exceed expectations and create harmonious environments that evoke a sense of joy and tranquility.
            <br/>
            We understand that each project is unique, and we tailor our services to fit your specific vision and requirements. Our meticulous attention to detail ensures that every aspect of your project is handled with utmost care and precision.
            <br/>
            Join us on this extraordinary design adventure, and let us bring your interior design dreams to life. Together, we will create spaces that inspire, delight, and surpass your wildest imagination. */}
            At our company, we are a dedicated team of interior designers committed to delivering extraordinary results. With a deep understanding of our clients' needs, we transform spaces into personalized works of art, paying meticulous attention to every detail from colors to furniture placement. We denounce the ordinary and embrace innovation and creativity in all aspects of our work, creating harmonious environments that bring joy and tranquility. Tailoring our services to your unique vision, we handle each project with utmost care and precision. Join us on this design adventure to bring your dreams to life. Together, we'll create inspiring spaces that surpass your imagination.
          </p>
        </div>
      </div>
    </div>
  );
}
