import React from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import Content from "../Content/Slider/Content";
import Designed_by from "../../Designed_by/Designe_by";
import FloatingButtons from "../../FloatingButtons/FloatingButtons";
import CustomImages from "../../Pages/CustomImages";
import { useSelector } from "react-redux";
import store from "../../Redux/store";
export default function Home() {
 
    const data=useSelector(store=>store)
    console.log("data",data)
  return (
    <>
      <Navbar />
      <Content />
      
      <Footer />
      <Designed_by />
      {/* <CustomImages /> */}
    </>
  );
}
