import React from "react";
import "../../App.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Services() {
  return (
    <div className="services-container">
      <h1 className="services">Services</h1>
      <div className="card-container">
        <Card className="custom-card">
          <Card.Img
            variant="top"
            src="/images/ptraining.jpg"
            alt="Service Image"
            className="card-image"
          />
          <Card.Body className="card-content">
            <Card.Title>Personal Training</Card.Title>
            <Card.Text>Description</Card.Text>
            <Button className="card-button">Button</Button>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Img
            variant="top"
            src="/images/group.jpg"
            alt="Service Image"
            className="card-image"
          />
          <Card.Body className="card-content">
            <Card.Title>Group Training</Card.Title>
            <Card.Text>Description</Card.Text>
            <Button className="card-button">Button</Button>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Img
            variant="top"
            src="/images/recovery.jpg"
            alt="Service Image"
            className="card-image"
          />
          <Card.Body className="card-content">
            <Card.Title>Recovery</Card.Title>
            <Card.Text>Description</Card.Text>
            <Button className="card-button">Button</Button>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Img
            variant="top"
            src="/images/nutrition.jpg"
            alt="Service Image"
            className="card-image"
          />
          <Card.Body className="card-content">
            <Card.Title>Nutrition</Card.Title>
            <Card.Text>Description</Card.Text>
            <Button className="card-button">Button</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
