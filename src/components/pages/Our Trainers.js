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
        <h2 className="quote-title">Customers Review</h2>
        <div className="quote">
          <h5 className="quote-header">John Doe</h5>
          <img src="/images/five-star.png" alt="stars" />
          <p className="quote-desc">
            "Working with my Braden has been a game-changer for me. They have
            not only helped me achieve my fitness goals but also taught me the
            importance of proper form and technique. Their expertise and
            guidance have made every workout session enjoyable and rewarding. I
            am grateful for their support and motivation throughout my fitness
            journey."
          </p>
        </div>
        <div className="quote">
          <h5 className="quote-header">Micheal Scott</h5>
          <img src="/images/five-star.png" alt="stars" />
          <p className="quote-desc">
            "Group training has been an incredible experience for me. The energy
            and camaraderie of exercising alongside like-minded individuals is
            truly motivating. Asher creates challenging and dynamic workouts
            that push us to new limits, all while fostering a supportive and
            encouraging environment. Not only have I seen great physical
            results, but I've also gained new friends and a sense of community.
            Group training has made my fitness journey enjoyable and inspiring."
          </p>
        </div>
        <div className="quote">
          <h5 className="quote-header">Avery Goerge</h5>
          <img src="/images/five-star.png" alt="stars" />
          <p className="quote-desc">
            "Prioritizing recovery in my fitness routine has been a
            game-changer. Ashely emphasized the importance of rest and
            rejuvenation, and it has made a significant impact on my overall
            well-being. By incorporating stretching, foam rolling, and active
            recovery techniques, I've noticed reduced muscle soreness, increased
            flexibility, and improved performance in my workouts. Recovery has
            become an essential part of my fitness journey, allowing me to push
            harder and reach new heights while maintaining a healthy balance."
          </p>
        </div>
        <div className="quote">
          <h5 className="quote-header">Mark Andrew</h5>
          <img src="/images/five-star.png" alt="stars" />
          <p className="quote-desc">
            "Learning about proper nutrition from Jabari has been life-changing.
            They helped me understand the significance of fueling my body with
            wholesome foods that nourish and energize me. With their guidance,
            I've developed healthier eating habits, made smarter food choices,
            and achieved a better relationship with food. Not only have I seen
            positive changes in my physical appearance, but I also feel more
            vibrant and focused throughout the day. Nutrition truly plays a
            vital role in my fitness journey, and I'm grateful for the knowledge
            and support my trainer has provided."
          </p>
        </div>
      </div>
    </div>
  );
}
