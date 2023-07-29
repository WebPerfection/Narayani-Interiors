import { Box, ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../../../Navbar/Navbar";
import TopImage from "../../TopImage/TopImage";
import Footer from "../../../Footer/Footer";
import "./Dummy.css";
import founder from "./founder.jpeg";
import bni from "./bni.jpeg";
import Consult from "../../../Consult/Consult";
export default function Dummy() {
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
      <ChakraProvider>
        <Navbar />
        <TopImage heading={"About Narayani"} />
        <Box className="about_main" margin="auto">
          <p style={{ width: "80%", margin: "auto",textAlign:"start",marginTop:"10px"}}>
            Narayani Interiors: Visionary luxury design studio crafting
            extraordinary furniture, lighting, and decor with a fusion of
            contemporary and iconic styles, delivering high-end, statement
            pieces that elevate modern spaces with unique identities. Embracing
            Haute Couture concepts for exclusive, one-of-a-kind creations.
          </p>

          <Box marginTop="80px" className="about_div" id="about_first">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <h3 style={{ padding: "20px 0px 0px 0px" }}>VISION</h3>
              <p style={{ textAlign: "start", padding: "0px 20px 20px 20px" }}>
                Create timeless pieces that inspire interior designers to build
                nouveau haute couture Interiors concept spaces, thinking about
                the future, looking to the past, and always being ahead of the
                latest trends.
              </p>
            </Box>
            <Box className="Image_about Image_about_1">
              <img src="https://hommes.studio/wp-content/uploads/2022/01/handmade-1.jpg"></img>
            </Box>
          </Box>
          <Box className="about_div">
            <Box className="Image_about Image_about_2">
              <img src="https://hommes.studio/wp-content/uploads/2022/01/customization-2.jpg"></img>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <h3 style={{ padding: "20px 0px 0px 0px" }}>MISSION</h3>
              <p style={{ textAlign: "start", padding: "0px 20px 20px 20px" }}>
                Periodically provide interior designers with a unique design
                furniture catalog that meets their dreams and creative needs in
                creating interior environments that reflect the identity of
                their customers.
              </p>
            </Box>
          </Box>

          <Box className="about_div" id="about_first">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <h3 style={{ padding: "20px 0px 0px 0px" }}>VALUES</h3>
              <p style={{ textAlign: "start", padding: "0px 20px 20px 20px" }}>
                {/* Exclusivity: By presenting a unique design concept, Narayani Interrior offers its clients a unique design furniture collection.
                <br></br>
                <br></br> */}
                Creativity: The furniture pieces created by Narayani are unique,
                with their own identity, and born from new and audacious ideas.
                <br></br>
                <br></br>
                Quality: Narayani furniture creations are handcrafted with the
                finest materials by the best artisans to deliver a refined,
                high-end product with premium customer service.
              </p>
            </Box>
            <Box className="Image_about Image_about_3">
              <img src="https://hommes.studio/wp-content/uploads/2022/01/bespoke-3.jpg"></img>
            </Box>
          </Box>
          <h1>Meet Our Founder</h1>
          <Box className="about_div  founder">
            <Box className="Image_about Image_about_4">
              <img src={founder}></img>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <h3 style={{ padding: "20px 0px 0px 0px" }}>Ankit Agarwal</h3>
              <p style={{ textAlign: "start", padding: "0px 20px 20px 20px" }}>
                {/* Exclusivity: By presenting a unique design concept, Narayani Interrior offers its clients a unique design furniture collection.
                <br></br>
                <br></br> */}
                Ankit Agarwal is the passionate founder and lead designer of
                Narayani Interiors, a renowned interior design firm. With over
                10 years of experience in the industry, Ankit has established
                himself as a visionary and creative force.
                <br></br>
                <br></br>
                Specializing in modern and minimalist designs, he brings a fresh
                and innovative approach to every project. His meticulous
                attention to detail and ability to transform spaces into
                stunning yet functional environments have earned him recognition
                and numerous industry accolades.
              </p>
            </Box>
          </Box>
          <h1>Organization We are connected</h1>
          <Box className="about_div  bni" id="about_first">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <h3 style={{ padding: "20px 0px 0px 0px" }}>BNI RANCHI </h3>
              <p style={{ textAlign: "start", padding: "0px 20px 20px 20px" }}>
                {/* Exclusivity: By presenting a unique design concept, Narayani Interrior offers its clients a unique design furniture collection.
                <br></br>
                <br></br> */}
                BNI is a organization that help their members increase their
                business through a structured, positive, and professional
                "word-of-mouth" program that enables them to develop long-term,
                meaningful relationships with quality business professionals.
              </p>
            </Box>
            <Box className="Image_about Image_about_5">
              <img src={bni}></img>
            </Box>
          </Box>
        </Box>
        <Box className="about_contact">
          <h3>ARE YOU A PROFESSIONAL?</h3>
          <p>
            Register to Narayani trade program, we’re here to make your project
            a reality<br></br>
            with exceptional service, insider resources, and exclusive benefits
            for professionals.
          </p>
          <button onClick={openModel}>REGISTER NOW</button>
        </Box>
        <Footer />
      </ChakraProvider>
      <Consult consult={consult} consultClick={consultClick}/>
    </>
  );
}
