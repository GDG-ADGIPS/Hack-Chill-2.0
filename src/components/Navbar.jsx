import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/pics/logo.svg" alt="Logo" className="logo" /> 
        {/* Logo  */}
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
