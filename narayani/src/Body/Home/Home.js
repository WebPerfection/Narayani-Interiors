import React from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import Content from "../Content/Slider/Content";
import Designed_by from "../../Designed_by/Designe_by";
import FloatingButtons from "../../FloatingButtons/FloatingButtons";
import CustomImages from "../../Pages/CustomImages";
import { useSelector } from "react-redux";
import store from "../../Redux/store";
import AbotCompany from "../Content/AboutCompany/AbotCompany";
import Work from "../Content/Work/Work";
import WorkHome from "../WoekHome/WorkHome";
import WorkingProcess from "../WorkingProcess/WorkingProcess";
import Testimonial from "../Testimonial/Testimonial";
import MakeApoiment from "../MakeApoiment/MakeApoiment";
import ContentPart from "../Content/Slider/ContentPart";
import { ChakraProvider } from "@chakra-ui/react";
export default function Home() {
 
    const data=useSelector(store=>store)
    console.log("data",data)
  return (
    <>
    <ChakraProvider>
      <Navbar />
      <Content />
      
      <ContentPart/>
      <AbotCompany />
      <Work />
      <WorkHome />
      </ChakraProvider>


      <WorkingProcess />

      
      <ChakraProvider>
      <Testimonial />
      <MakeApoiment />
      <Footer />
      <Designed_by />
      </ChakraProvider>
      {/* <CustomImages /> */}
    </>
  );
}
