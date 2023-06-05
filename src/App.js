import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import OurTrainers from "./components/pages/Our Trainers";
import ContactUs from "./components/pages/Contact Us";
import BookNow from "./components/pages/Book Now";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-trainers" element={<OurTrainers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/book-now" element={<BookNow />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
