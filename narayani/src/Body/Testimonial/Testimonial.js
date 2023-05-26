import React from "react";
import "./Testimonial.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, ABC Company",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lacus ac risus cursus, in elementum mi rutrum. Sed faucibus eleifend mi sed condimentum.",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "CTO, XYZ Corporation",
    content:
      "Ut eu augue non enim pellentesque blandit vitae sed magna. Mauris auctor mattis arcu, non sagittis mauris venenatis id. Sed ultrices lorem et arcu interdum aliquam.",
  },
  {
    id: 3,
    name: "John Doe",
    designation: "CEO, ABC Company",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lacus ac risus cursus, in elementum mi rutrum. Sed faucibus eleifend mi sed condimentum.",
  },
  {
    id: 4,
    name: "Jane Smith",
    designation: "CTO, XYZ Corporation",
    content:
      "Ut eu augue non enim pellentesque blandit vitae sed magna. Mauris auctor mattis arcu, non sagittis mauris venenatis id. Sed ultrices lorem et arcu interdum aliquam.",
  },
];

const Testimonial = () => {
  return (
    // <div className="testimonial-container">
    <div className='workHome-main-div'>
        <h6 className='h6'>What Our Clients Say</h6>
    <Carousel
      swipeable={false}
      draggable={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all 2s"
      transitionDuration={2000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <p className="testimonial-content">{testimonial.content}</p>
            <div className="testimonial-info">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-designation">
                {testimonial.designation}
              </p>
            </div>
          </div>
        ))}
     
    </Carousel>
    </div>
  );
};

export default Testimonial;
