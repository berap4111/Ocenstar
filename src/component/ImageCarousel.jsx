import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ship1 from "../assets/image/Ship1.jpg";
import ship2 from "../assets/image/Ship2.jpg";
import ship3 from "../assets/image/Ship3.jpg";
import "../style/ImageCarousel.css"; // Custom CSS
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ImageCarousel() {
  return (
    <Carousel
      interval={3000}
      pause={false}
      wrap={true}
      indicators={true}
      nextIcon={<FaArrowRight style={{ color: "white", fontSize: "2rem" }} />}
      prevIcon={<FaArrowLeft style={{ color: "white", fontSize: "2rem" }} />}
    >
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ship1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ship2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ship3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
