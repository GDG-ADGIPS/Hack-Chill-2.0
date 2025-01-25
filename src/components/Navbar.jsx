import React from "react";
import "./Navbar.css";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="brand">Hack & Chill 2.0</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#" className="nav-link">home</a></li>
        <li><a href="#" className="nav-link">partners</a></li>
        <li><a href="#" className="nav-link">contact us</a></li>
        <li><a href="#" className="nav-link">faq</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
