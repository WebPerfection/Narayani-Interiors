import React from 'react'
import Button from "react-bootstrap/Button"
import SrcImage1 from "../../ImageData/v1-1.jpg"
import SrcImage2 from "../../ImageData/v1-2.jpg"
import SrcImage3 from "../../ImageData/v1-3.jpg"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Content() {
  const data=[SrcImage1,SrcImage2,SrcImage3]
  return (
    <Carousel id="carouselExampleFade" class="carousel slide carousel-fade">
      {data.map((el)=><Carousel.Item interval={1500}>
        <img src={el} className="d-block w-100"/>
      </Carousel.Item>)}
      {/* <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={SrcImage1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={SrcImage2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SrcImage3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  )
}




