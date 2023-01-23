import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <img
              src={require("../assets/logo.jpg")}
              alt="DCPCR logo"
              style={{ width: "20%", maxWidth: "80px", height: "auto" }}
            />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={handleClick}>
                <p style={{ display: "inline" }}>Home</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/disabilityInfo"
                className="nav-links"
                onClick={handleClick}
              >
                <p style={{ display: "inline" }}>Disability Info</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/essentialDocs"
                className="nav-links"
                onClick={handleClick}
              >
                <p style={{ display: "inline" }}>Essential docs</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resources"
                className="nav-links"
                onClick={handleClick}
              >
                <p style={{ display: "inline" }}>Resources</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/aboutus"
                className="nav-links"
                onClick={handleClick}
              >
                <p style={{ display: "inline" }}>About us</p>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
