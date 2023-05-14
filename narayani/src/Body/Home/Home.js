import React from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import Content from "../Content/Slider/Content";
import Designed_by from "../../Designed_by/Designe_by";
import FloatingButtons from "../../FloatingButtons/FloatingButtons";
import CustomImages from "../../Pages/CustomImages";
export default function Home() {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
      <Designed_by />
      <FloatingButtons />
      {/* <CustomImages /> */}
    </>
  );
}
