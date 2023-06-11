import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { List } from "react-bootstrap-icons";

//i class name click is for hamburger
//handleClick swaps hamberger between clicks 20min
//useNavigate istead of link (Ahmad)
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate();
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //fixes bug where book now button shows up after refresh when window width is not full
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* logo */}
          {/* onClick added so that clicking logo closes the hamburger */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            HABIBI MUSCLE CLUB
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className="bi bi-list" />
          </div>
          {/* clicking button will make it disapear after selection */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              {/* Home button */}
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* Services button */}
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              {/* Our Trainers button */}
              <Link
                to="/our-trainers"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Trainers
              </Link>
            </li>
            <li className="nav-item">
              {/* Contact Us button */}
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li>
              {/* book now button */}
              {button && (
                <Button
                  className="btn btn-dark btn-outline-light"
                  onClick={() => {
                    closeMobileMenu();
                    navigate("/book-now");
                  }}
                >
                  BOOK NOW
                </Button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
