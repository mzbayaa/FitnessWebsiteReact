import React from "react";
import "../../App.css";
import "./Our Trainers.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function OurTrainers() {
  return (
    <div className="our-trainers-container">
      <h1 className="our-trainers">Our Trainers</h1>
      <h2 className="our-trainers-header">Find the expert for you</h2>
      <div className="our-trainers-card-container">
        <Card className="our-trainers-custom-card">
          <Card.Img
            variant="top"
            src="/images/ptraining.jpg"
            alt="Trainer Image"
            className="our-trainers-card-image"
          />
          <Card.Body className="our-trainers-card-content">
            <Card.Title>Personal Training</Card.Title>
            <Card.Text>Description</Card.Text>
          </Card.Body>
        </Card>
        <Card className="our-trainers-custom-card">
          <Card.Img
            variant="top"
            src="/images/group.jpg"
            alt="Trainer Image"
            className="our-trainers-card-image"
          />
          <Card.Body className="our-trainers-card-content">
            <Card.Title>Group Training</Card.Title>
            <Card.Text>Description</Card.Text>
          </Card.Body>
        </Card>

        <Card className="our-trainers-custom-card">
          <Card.Img
            variant="top"
            src="/images/recovery.jpg"
            alt="Trainer Image"
            className="our-trainers-card-image"
          />
          <Card.Body className="our-trainers-card-content">
            <Card.Title>Recovery</Card.Title>
            <Card.Text>Description</Card.Text>
          </Card.Body>
        </Card>
        <Card className="our-trainers-custom-card">
          <Card.Img
            variant="top"
            src="/images/nutrition.jpg"
            alt="Trainer Image"
            className="our-trainers-card-image"
          />
          <Card.Body className="our-trainers-card-content">
            <Card.Title>Nutrition</Card.Title>
            <Card.Text>Description</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
