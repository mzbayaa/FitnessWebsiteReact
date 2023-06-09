import React from "react";
import "../../App.css";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Services() {
  const navigate = useNavigate();
  return (
    <div className="services-container">
      <h1 className="services">Services</h1>
      <h2 className="services-header">Pick between our offered services</h2>
      <h3 className="services-second-header">
        All programs one hour in length
      </h3>
      <div className="services-card-container">
        <Card className="services-custom-card">
          <Card.Img
            variant="top"
            src="/images/ptraining.jpg"
            alt="Service Image"
            className="services-card-image"
          />
          <Card.Body className="services-card-content">
            <Card.Title>
              Personal Training <br /> $30
            </Card.Title>
            <Card.Text>
              Embark on a transformative fitness journey with our personalized
              training programs. Our experienced personal trainers are committed
              to helping you achieve your goals. Through tailored workouts and
              expert guidance, we empower you to reach your full potential. Join
              us to experience the benefits of our customized personal training
              and unlock a stronger, healthier version of yourself. Start your
              fitness transformation today.
            </Card.Text>
            <Button
              className="services-card-button"
              className="btn btn-dark"
              onClick={() => {
                navigate("/book-now");
              }}
            >
              BOOK NOW
            </Button>
          </Card.Body>
        </Card>
        <Card className="services-custom-card">
          <Card.Img
            variant="top"
            src="/images/group.jpg"
            alt="Service Image"
            className="services-card-image"
          />
          <Card.Body className="services-card-content">
            <Card.Title>
              Group Training <br /> $25
            </Card.Title>
            <Card.Text>
              Experience the power of group training with our dynamic programs.
              Led by certified trainers, our high-energy sessions offer
              motivation, camaraderie, and accountability. Perfect for all
              fitness levels, our workouts are tailored to your needs. Join our
              supportive community and achieve your goals together. Start your
              fitness journey now and unleash your potential in our engaging
              group training sessions.
            </Card.Text>
            <Button
              className="services-card-button"
              className="btn btn-dark"
              onClick={() => {
                navigate("/book-now");
              }}
            >
              BOOK NOW
            </Button>
          </Card.Body>
        </Card>
        <Card className="services-custom-card">
          <Card.Img
            variant="top"
            src="/images/recovery.jpg"
            alt="Service Image"
            className="services-card-image"
          />
          <Card.Body className="services-card-content">
            <Card.Title>
              Recovery <br /> $20
            </Card.Title>
            <Card.Text>
              Unlock the power of recovery with our specialized programs
              designed to revitalize your body and mind. Our expert team is
              dedicated to helping you achieve optimal rest and rejuvenation.
              Through personalized strategies and guidance, we support your
              physical and mental recovery journey. Join us to experience the
              transformative benefits of our tailored recovery programs and
              discover a renewed sense of vitality. Start your path to total
              well-being today.
            </Card.Text>
            <Button
              className="services-card-button"
              className="btn btn-dark"
              onClick={() => {
                navigate("/book-now");
              }}
            >
              BOOK NOW
            </Button>
          </Card.Body>
        </Card>
        <Card className="services-custom-card">
          <Card.Img
            variant="top"
            src="/images/nutrition.jpg"
            alt="Service Image"
            className="services-card-image"
          />
          <Card.Body className="services-card-content">
            <Card.Title>
              Nutrition <br /> $25{" "}
            </Card.Title>
            <Card.Text>
              Discover the transformative power of nutrition with our
              comprehensive programs. Our experienced nutritionists provide
              personalized plans tailored to your goals and dietary
              requirements. From balanced eating to meal planning and healthy
              habits, we offer expert guidance to optimize your well-being.
              Embark on a journey to a healthier, more vibrant life by joining
              our nutrition programs today.
            </Card.Text>
            <Button
              className="services-card-button"
              className="btn btn-dark"
              onClick={() => {
                navigate("/book-now");
              }}
            >
              BOOK NOW
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
