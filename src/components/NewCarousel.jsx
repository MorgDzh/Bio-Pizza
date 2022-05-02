import React from "react";
import { Carousel } from "react-bootstrap";
import pizzacar from "../assets/pizzacar.png";
import jspizza from "../assets/jspizza.png";
import balpizza from "../assets/balpizza.png";

const NewCarousel = () => {
  return (
    <div className="pizza-carousel">
      <Carousel fade>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={pizzacar}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={jspizza}
            alt="Second slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={balpizza}
            alt="Third slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>   
    </div>
  );
};

export default NewCarousel;
