import React from "react";
import "../../App.css";
import "./Confirm Booking.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Information() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <h1 className="header">Booking Confirmed!</h1>
      <p className="message">
        We have succecufully received and confirmed your reservation request.{" "}
      </p>
      <p>An email confirming your reservation will be sent to you shortly </p>
      <div className="button">
        <Button
          className="btn btn-success"
          onClick={() => {
            navigate("/book-now");
          }}
        >
          MAKE ANOTHER RESERVATION
        </Button>
      </div>
    </div>
  );
}
