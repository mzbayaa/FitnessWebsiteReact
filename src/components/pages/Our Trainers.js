import React from "react";
import "../../App.css";
import "./Our Trainers.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../Slider.js";

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
            <Card.Text className="trainers-desc">
              Meet our exceptional personal trainer dedicated to your fitness
              goals. With extensive experience and a passion for wellness, they
              provide individualized attention and guidance. Expect personalized
              workouts, expert nutrition advice, and unwavering motivation.
              Beginner or athlete, our trainer is committed to your success. Get
              ready to transform your fitness journey with our skilled and
              inspiring trainer's support.
              <br />
              <br />
              For more information:
              <br />
              Email: braden.smith@gmail.com
              <br />
              Phone Number: 613-613-6136
            </Card.Text>
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
            <Card.Text className="trainers-desc">
              Join our dynamic group trainer for exhilarating sessions. With
              infectious enthusiasm and expertise, they'll help you achieve
              fitness goals in a supportive community. Experience dynamic
              workouts, modifications for all levels, and a motivating
              atmosphere. Join our program for energetic sessions led by our
              inspiring trainer. Get ready to push limits, have fun, and achieve
              incredible results together.
              <br />
              <br />
              For more information:
              <br />
              Email: asher.dele@gmail.com
              <br />
              Phone Number: 316-316-3163
            </Card.Text>
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
            <Card.Text className="trainers-desc">
              Meet our dedicated recovery specialist, experienced in optimizing
              rest and rejuvenation. With personalized strategies, they support
              your recovery journey. Trust their expertise in relaxation
              techniques and tailored plans to enhance vitality and performance.
              Embark on a transformative journey towards lasting rejuvenation
              and unlock your potential under their compassionate guidance.
              Experience enhanced recovery and well-being with our skilled
              specialist.
              <br />
              <br />
              For more information:
              <br />
              Email: ashely.martins@gmail.com
              <br />
              Phone Number: 345-567-5867
            </Card.Text>
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
            <Card.Text className="trainers-desc">
              Meet our exceptional nutritionist, dedicated to helping you
              achieve your health goals through optimal nutrition. With
              personalized guidance and customized meal plans, they empower you
              to make informed choices for a balanced, nourishing lifestyle.
              Embark on a transformative journey towards improved well-being
              with our skilled nutritionist. Experience the benefits of optimal
              eating and make positive changes to your nutrition today.
              <br />
              <br />
              For more information:
              <br />
              Email: jabari.martial@gmail.com
              <br />
              Phone Number: 493-349-5834
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h2 className="our-trainers-second-header">Customers Review</h2>
        <Slider />
      </div>
    </div>
  );
}
