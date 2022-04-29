import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="https://7themes.su/php/imres/resize.php?width=1280&height=720&cropratio=16:9&image=/_ph/34/17818082.jpg" />
        </div>
        <div>
          <img src="https://7themes.su/php/imres/resize.php?width=1280&height=720&cropratio=16:9&image=/_ph/34/17818082.jpg" />
        </div>
        <div>
          <img src="https://7themes.su/php/imres/resize.php?width=1280&height=720&cropratio=16:9&image=/_ph/34/17818082.jpg" />
        </div>
      </Carousel>
    );
  }
}
