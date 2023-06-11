import React, { useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import "./Book Now.css";
import { Form, Container, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BookNow() {
  const services = [
    { value: "", label: "Select" }, // Default option
    { value: "Personal Training", label: "Personal Training" },
    { value: "Group Training", label: "Group Training" },
    { value: "Recovery", label: "Recovery" },
    { value: "Nutrition", label: "Nutrition" },
  ];
  const trainers = [
    { value: "", label: "Select" }, // Default option
    { value: "Personal Trainer", label: "Braden Smith" },
    { value: "Group Trainer", label: "Asher Dele" },
    { value: "Recovery Specialist", label: "Ashely Martins" },
    { value: "Nutritionist", label: "Jabari Martial" },
  ];
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState(""); // Set initial state to empty string
  const [trainer, setTrainer] = useState(""); // Set initial state to empty string

  const handleBooking = () => {
    if (date && time && service && trainer) {
      // Save the user inputs for later use
      // You can store them in a state variable, local storage, or send them to a server
      navigate("/information");
    } else {
      // Show an error message or perform any desired action
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div>
      <h1 className="book-now">BOOK NOW</h1>
      <h2 className="book-now-header">Book an Appointment</h2>
      <Container className="form-container">
        <Row className="row-one">
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Date:</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Time:</Form.Label>
                <Form.Control
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="row-two">
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Service:</Form.Label>
                <select
                  className="form-control"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  {services.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Trainer:</Form.Label>
                <select
                  className="form-control"
                  value={trainer}
                  onChange={(e) => setTrainer(e.target.value)}
                >
                  {trainers.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row nameClass="button-row">
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            nameClass="button-col"
          >
            <Button className="btn btn-dark" onClick={handleBooking}>
              BOOK
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
