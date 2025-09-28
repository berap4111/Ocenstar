import Carousel from "react-bootstrap/Carousel";
import ship1 from "../assets/image/Ship1.jpg";
import ship2 from "../assets/image/Ship2.jpg";
import ship3 from "../assets/image/Ship3.jpg";
import '../style/ImageCarousel.css'; // Import custom CSS for additional styling
function ImageCarousel() {
  return (
    <Carousel interval={2000} pause={false} wrap={true}>
      {/* First Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ship1}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ship2}
          alt="Second slide"
          
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ship3}
          alt="Third slide"
          
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
