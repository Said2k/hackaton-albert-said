import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://dlcdnwebimgs.asus.com/gain/E748F442-22AB-41EA-BDA6-F3E49EF8D673/fwebp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://dlcdnwebimgs.asus.com/gain/D85832FB-7799-482A-97D7-D5C53B1DB2D8/fwebp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dlcdnwebimgs.asus.com/gain/E47A5301-F54C-478A-89E1-665B1240FBC5/fwebp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* ================================================= */}

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dlcdnwebimgs.asus.com/gain/A4D53C92-0DAD-4EEC-A320-C4A87F3F9A28/fwebp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* ================================== */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dlcdnwebimgs.asus.com/gain/A2E1B050-FD9B-4EC3-A29F-96223CBF8250/fwebp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Slider;
