import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>HABIBI MUSCLE CLUB</h4>
          <p>Your ultimate fitness and training destination</p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/our-trainers">Our Trainers</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 HABIBI MUSCLE CLUB. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
