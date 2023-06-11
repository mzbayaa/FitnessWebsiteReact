import React, { useState } from "react";
import "../../App.css";
import "./Information.css";
import { useNavigate } from "react-router-dom";
import { Form, Container, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Information() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleConfirmBooking = () => {
    if (firstName && lastName && email && phoneNumber) {
      // Save the user inputs for later use
      // You can store them in a state variable, local storage, or send them to a server
      navigate("/confirm-booking");
    } else {
      // Show an error message or perform any desired action
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div>
      <h2 className="information-header">Your information</h2>
      <Container className="form-container">
        <Row className="row-one">
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="row-two">
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Phone number:</Form.Label>
                <Form.Control
                  type=""
                  placeholder="xxx-xxx-xxxx"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col
            nameClass="button-col"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              className="button"
              className="btn btn-dark"
              onClick={handleConfirmBooking}
            >
              CONFIRM BOOKING
            </Button>
          </Col>
        </Row>
        <Button
          className="button-back"
          className="btn btn-dark"
          style={{ float: "right" }}
          onClick={() => {
            navigate("/book-now");
          }}
        >
          BACK
        </Button>
      </Container>
    </div>
  );
}
