import React from "react";
// import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <h1> EMBRACE THE CHALLENGE</h1>
      <p>Why wait any longer?</p>
      <div className="hero-btns">
        <Button
          className="btn btn-dark btn-outline-light btn-lg"
          onClick={() => {
            navigate("/book-now");
          }}
        >
          GET MOVING
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
