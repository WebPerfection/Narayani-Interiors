import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useSelector } from "react-redux";
import Review from './Review';
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1199, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 899, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 599, min: 0 },
    items: 1,
  },
};
// const testimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     img: "https://avatars.githubusercontent.com/u/107461657?v=4",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lacus ac risus cursus, in elementum mi rutrum. Sed faucibus eleifend mi sed condimentum.",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     img: "https://avatars.githubusercontent.com/u/107461657?v=4",
//     content:
//       "Ut eu augue non enim pellentesque blandit vitae sed magna. Mauris auctor mattis arcu, non sagittis mauris venenatis id. Sed ultrices lorem et arcu interdum aliquam.",
//   }
// ];

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState("");
  const model = useSelector((store) => store);
  useEffect(() => {
    axios
      .get("https://azure-hen-cap.cyclic.app/testimonial")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.log(err));
  }, [model]);
  console.log(testimonials);
  return (
    // <div className="body">
    //   <div className="heading-div">
    //     <h6 className="h6">WHAT OUR CLIENTS SAY</h6>
    //   </div>
    //   <div className="workHome-main-div Flex" >
    //     <div className="testimonial-main" style={{ width: "100%" }}>
    //       {testimonials && (
    //         <Carousel
    //           swipeable={false}
    //           draggable={true}
    //           responsive={responsive}
    //           ssr={true}
    //           infinite={true}
    //           autoPlay={true}
    //           autoPlaySpeed={3000}
    //           keyBoardControl={true}
    //           customTransition="all 2s"
    //           transitionDuration={2000}
    //           containerClass="carousel-container"
    //           removeArrowOnDeviceType={["tablet", "mobile"]}
    //           dotListClass="custom-dot-list-style"
    //           itemClass="carousel-item-padding-40-px"
    //         >
    //           {testimonials.map((testimonial) => (
    //             <div className="testimonial-1">
    //               <div className="testimonial">
    //                 <img
    //                   src={testimonial.image}
    //                   alt={testimonial.name}
    //                   className="testimonial-image"
    //                 />
    //                 <h3 className="testimonial-name">{testimonial.name}</h3>
    //                 <p className="testimonial-message">{testimonial.message}</p>
    //               </div>
    //             </div>
    //           ))}
    //         </Carousel>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <main className="clinet-reviews">
      <section className="container">
        <div className="title">
          <h6 className="h6">Client Testimonials</h6>
          <h1 style={{ color: 'black' }}>What Our Clients Have to Say</h1>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default Testimonial;
