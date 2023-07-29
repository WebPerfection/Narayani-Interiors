import { Box, ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../../../Navbar/Navbar";
import TopImage from "../../TopImage/TopImage";
import Footer from "../../../Footer/Footer";
import "./Dummy.css";
import founder from "./founder.jpeg";
import bni from "./bni.jpeg";
import Consult from "../../../Consult/Consult";
import teem from "./teem.jpeg"
export default function Dummy() {
  const [consult, setConsult] = useState(false);
  const consultClick = () => {
    setConsult(false);
  };
  const openModel = () => {
    // dispatch(toggelModel());
    setConsult(true);
  };
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <TopImage heading={"About Narayani"} />
        <Box className="about_main" margin="auto">
          <br></br>
          <h6 className="h6">Welcome to Narayani Interiors</h6>
          <h1> Where Visionary Luxury Design Takes Center Stage</h1>
          <p
            style={{
              margin: "auto",
              textAlign: "start",
              marginTop: "10px",
            }}
          >
            As a premier design studio, we are dedicated to crafting
            extraordinary furniture, lighting, and decor that transcend the
            ordinary. Our passion lies in blending contemporary aesthetics with
            iconic elements, resulting in captivating pieces that redefine
            modern living. Each creation is meticulously curated to deliver
            high-end, statement furniture that transforms spaces into havens of
            sophistication and individuality. Inspired by Haute Couture
            concepts, our designs exude exclusivity, ensuring that every piece
            is a one-of-a-kind masterpiece. With Narayani Interiors, elevate
            your living spaces to new heights and immerse yourself in the world
            of unparalleled elegance and artistry.
          </p>

          <Box marginTop="80px" className="about_div" id="about_first">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {/* <h3 style={{ padding: "20px 0px 0px 0px" }}>VISION</h3> */}
              <h6 className="h6">VISION</h6>
              <p style={{ textAlign: "start", padding: "0px 20px 20px 20px" }}>
                At Narayni-Interior, we envision a world where interior
                designers are empowered to create breathtaking spaces that blend
                nouveau haute couture concepts with timeless elegance. Our goal
                is to inspire designers to think beyond the present, drawing
                inspiration from both the past and the future while staying at
                the forefront of the latest trends.
              </p>
            </Box>
            <Box className="Image_about Image_about_1">
              <img src="https://hommes.studio/wp-content/uploads/2022/01/handmade-1.jpg"></img>
            </Box>
          </Box>
          <br></br>
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
              {/* <h3 style={{ padding: "20px 0px 0px 0px" }}>MISSION</h3> */}
              <h6 className="h6">MISSION</h6>
              <p style={{ textAlign: "start", padding: "0px 20px 20px 20px" }}>
                Our mission is to be a reliable and creative partner for
                interior designers, consistently providing them with a unique
                furniture catalog that brings their design dreams to life. We
                understand that each interior space should be a reflection of
                its inhabitants' identity, and our furniture pieces play a
                pivotal role in achieving this vision.
              </p>
            </Box>
          </Box>
          <br></br>
          <Box className="about_div" id="about_first">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {/* <h3 style={{ padding: "20px 0px 0px 0px" }}>VALUES</h3> */}
              <h6 className="h6">VALUES</h6>
              <p style={{ textAlign: "start", padding: "0px 20px 20px 20px" }}>
                {/* Exclusivity: By presenting a unique design concept, Narayani Interrior offers its clients a unique design furniture collection.
                <br></br>
                <br></br> */}
                <strong>Quality:</strong> We take immense pride in the
                craftsmanship of our furniture creations. Each piece is
                meticulously handcrafted using the finest materials, showcasing
                our commitment to delivering high-end products of unparalleled
                quality.
                <br></br>
                <strong>Artistry:</strong>Our artisans are not just skilled
                craftsmen; they are artists who pour their passion and expertise
                into every creation. Their attention to detail ensures that each
                piece becomes a masterpiece that stands the test of time.
                <br></br>
                <strong>Customer-Centric:</strong> Our customers are at the
                heart of everything we do. We strive to provide premium customer
                service, assisting interior designers in finding the perfect
                furniture solutions for their projects and ensuring a seamless
                experience from start to finish.
                <br></br>
                <strong>Sustainability:</strong> We believe in responsible
                design and production practices. Sustainability is deeply
                ingrained in our process, from sourcing eco-friendly materials
                to minimizing waste, contributing to a greener and more
                sustainable future.
                <br></br>
                <strong>Innovation:</strong> We embrace innovation in design and
                technology, constantly seeking new ways to elevate the interior
                design experience. By staying ahead of the curve, we enable
                designers to access cutting-edge solutions for their visionary
                projects.
              </p>
            </Box>
            <Box className="Image_about Image_about_3">
              <img src="https://hommes.studio/wp-content/uploads/2022/01/bespoke-3.jpg"></img>
            </Box>
          </Box>
          <br></br>
          <h6 className="h6">Meet Our Founder</h6>
          <br></br>
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
          <br></br>




          <h6 className="h6">Our Teem Member</h6>
          <br></br>
          <Box className="about_div  bni" id="about_first">
          
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <h3 style={{ padding: "20px 0px 0px 0px" }}>Pulkit Agarwal</h3>
              <p style={{ textAlign: "start", padding: "0px 20px 20px 20px" }}>
                {/* Exclusivity: By presenting a unique design concept, Narayani Interrior offers its clients a unique design furniture collection.
                <br></br>
                <br></br> */}
                As an aspiring designer, I believe that designing increases our
                knowledge and helps our holistic development. It makes us more
                courteous, kind, and humble. It also refines us and our
                environment.
                <br></br><br></br>
                I have always had a social personality and love
                traveling and exploring new places.
                <br></br><br></br>
                Designing has helped broaden my understanding of the world.
                Every building has a story, whose narrative of beauty keeps
                changing. I am passionate about designing, experimenting with
                materials, and coming up with original concepts.
              </p>
            </Box>
            <Box className="Image_about Image_about_6" >
              <img src={teem}></img>
            </Box>
            </Box>
            <br></br>




          <h6 className="h6">Organization We are connected</h6>
          <br></br>
          <Box className="about_div  bni" >
          <Box className="Image_about Image_about_5">
              <img src={bni}></img>
            </Box>
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
          
          </Box>
        </Box>
        <br></br>
        <Box className="about_contact last">
          <h3>WHY CHOOSE NARAYANI FOR YOUR PROJECTS?</h3>
          <p>
            At Narayani, we're passionate about collaborating with design
            professionals to create exceptional interior spaces. Whether you're
            an interior designer, architect, or stylist, our team is dedicated
            to crafting captivating environments that leave a lasting
            impression. With unparalleled craftsmanship, personalized solutions,
            inspiring collections, and meticulous attention to detail, we take
            immense pride in our work. Let's work together to bring your vision
            to life. Click the button below to{" "}
            <br></br>
            <button className="get_in_touch" onClick={openModel}>Get in touch</button>
            <br></br> and transform your
            interior spaces with Narayani.
          </p>
        </Box>

        <Footer />
      </ChakraProvider>
      <Consult consult={consult} consultClick={consultClick} />
    </>
  );
}
