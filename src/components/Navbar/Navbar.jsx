import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/pics/logo.svg" alt="Logo" className="logo" />
        <a className="brand" href="/">
          HACK&CHILL 2.0
        </a>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon">☰</span>
      </button>

      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#" className="nav-link">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            SPONSORS
          </a>
        </li>
        <li>
          <a href="mailto:dscadgitm@gmail.com" className="nav-link">
            CONTACT US
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
