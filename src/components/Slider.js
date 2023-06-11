import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Slider() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(14).jpg"
        alt="..."
      >
        <h4>Personal Training</h4>
        <p>A costomers review after a personal training session</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        alt="..."
      >
        <h4>Group Training</h4>
        <p>A costomers review after a gruop training session</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        alt="..."
      >
        <h4>Recovery</h4>
        <p>A costomers review after a recovery session</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={4}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(14).jpg"
        alt="..."
      >
        <h4>Nutrition</h4>
        <p>A costomers review after a nutition session</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
