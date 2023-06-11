import React from "react";
import "../../App.css";
import "./Information.css";
import { useNavigate } from "react-router-dom";
import { Form, Container, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Information() {
  const navigate = useNavigate();
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
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Phone number:</Form.Label>
                <Form.Control type="" placeholder="xxx-xxx-xxxx"></Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col nameClass="button-col">
            <Button
              className="button"
              className="btn btn-dark"
              onClick={() => {
                navigate("/confirm-booking");
              }}
            >
              CONFIRM BOOKING
            </Button>
            <Button
              className="button"
              className="btn btn-dark"
              onClick={() => {
                navigate("/book-now");
              }}
            >
              BACK
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
