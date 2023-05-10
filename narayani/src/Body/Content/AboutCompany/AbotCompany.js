import React from "react";
import CompImag from "./about-image.jpg";
import "./AboutCompany.css";
export default function AbotCompany() {
  return (
    <div className="about-main Flex">
      <div className="about-main-div Flex">
        <div className="companyImag">
          <img src={CompImag} />
          <br></br>
          <div className="company-text">
            
          <h5>Experiencd & Well knowledgeable Interior designers.</h5>
          <div><h6>Ankit Agarwal, <span className="span">CEO & Founder</span></h6></div>
          </div>
        </div>
        <div className="companyTitel">
          <h6>ABOUT COMPANY</h6>
          <h1>A SMALL EFFICIENT INTERIOR DESIGNING TEAM</h1>
          <p>
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of the moment, so
            blinded by desire, that they cannot foresee the pain and trouble
            that are bound. Indignation and dislike men who are so beguiled and
            demoralized by the charms pleasure of the moment, so blinded by
            desire, that they cannot foresee.
          </p>
        </div>
      </div>
    </div>
  );
}
