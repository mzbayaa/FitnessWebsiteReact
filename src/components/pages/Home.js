import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <video
        className="home-video"
        src="../video/FitnessWebsiteVideo.mp4"
        autoPlay
        loop
        muted
      />
      <h1> EMBRACE THE CHALLENGE</h1>
      <p>Why wait any longer?</p>
      <div className="home-btns">
        <Button
          className="btn btn-dark btn-outline-light btn-lg"
          onClick={() => {
            navigate("/book-now");
          }}
        >
          GET MOVING
        </Button>
      </div>
      <div className="home-content">
        <h2></h2>
      </div>
    </div>
  );
}

export default Home;
