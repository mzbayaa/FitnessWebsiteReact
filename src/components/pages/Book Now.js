import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import "./Book Now.css";
import { Form, Container, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BookNow() {
  const services = [
    { value: "Personal Training", label: "Personal Training" },
    { value: "Group Training", label: "Group Training" },
    { value: "Recovery", label: "Recovery" },
    { value: "Nutrition", label: "Nutrition" },
  ];
  const trainers = [
    { value: "Personal Trainer", label: "Braden Smith" },
    { value: "Group Trainer", label: "Asher Dele" },
    { value: "Recovery Specialist", label: "Ashely Martins" },
    { value: "Nutritionist", label: "Jabari Martial" },
  ];
  const navigate = useNavigate();
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
                <Form.Control type="date"></Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Time:</Form.Label>
                <Form.Control type="time"></Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="row-two">
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Service:</Form.Label>
                <select className="form-control">
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
                <select className="form-control">
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
          <Col nameClass="button-col">
            <Button
              className="btn btn-dark"
              onClick={() => {
                navigate("/information");
              }}
            >
              BOOK
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
