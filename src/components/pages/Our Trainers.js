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
            src="/images/trainer1.jpeg"
            alt="Trainer Image"
            className="our-trainers-card-image"
          />
          <Card.Body className="our-trainers-card-content">
            <Card.Title>
              Personal Trainer <br /> Braden Smith
            </Card.Title>
            <Card.Text>Description</Card.Text>
          </Card.Body>
        </Card>
        <Card className="our-trainers-custom-card">
          <Card.Img
            variant="top"
            src="/images/trainer2.jpeg"
            alt="Trainer Image"
            className="our-trainers-card-image"
          />
          <Card.Body className="our-trainers-card-content">
            <Card.Title>
              Group Trainer <br /> Asher Dele
            </Card.Title>
            <Card.Text>Description</Card.Text>
          </Card.Body>
        </Card>

        <Card className="our-trainers-custom-card">
          <Card.Img
            variant="top"
            src="/images/trainer3.jpeg"
            alt="Trainer Image"
            className="our-trainers-card-image"
          />
          <Card.Body className="our-trainers-card-content">
            <Card.Title>
              Recovery Specialist <br /> Ashely Martins
            </Card.Title>
            <Card.Text>Description</Card.Text>
          </Card.Body>
        </Card>
        <Card className="our-trainers-custom-card">
          <Card.Img
            variant="top"
            src="/images/trainer4.jpeg"
            alt="Trainer Image"
            className="our-trainers-card-image"
          />
          <Card.Body className="our-trainers-card-content">
            <Card.Title>
              Nutritionist <br /> Jabari Martial
            </Card.Title>
            <Card.Text>Description</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
