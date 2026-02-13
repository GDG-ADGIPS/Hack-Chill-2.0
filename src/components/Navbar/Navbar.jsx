import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/pics/logo.svg" alt="Logo" className="logo" />
        <a className="brand" href="/">
          HACK&CHILL 3.0
        </a>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon">☰</span>
      </button>

      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <button className="nav-link" onClick={() => scrollToSection("about")}>
            ABOUT
          </button>
        </li>
        <li>
          <button
            className="nav-link"
            onClick={() => scrollToSection("sponsors")}
          >
            SPONSORS
          </button>
        </li>
        <li>
          <button className="nav-link">
            <a href="mailto:dscadgitm@gmail.com" className="nav-link">
              CONTACT US
            </a>
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={() => scrollToSection("faq")}>
            FAQ
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
