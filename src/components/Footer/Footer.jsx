import { Link } from "react-scroll";
import "./Footer.css";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="main-footer-left">
          <h2>LET'S GET YOU REGISTERED!</h2>
          <button>
            <div className="btn-text ">Register here</div>{" "}
            <div className="arrow">→</div>{" "}
          </button>
        </div>
        <div className="main-footer-right">
          <div className="section-link">
            <div className="link-col1">
              <ul>
                <li>
                  <Link to="">HOME</Link>
                </li>
                <li>
                  <Link to="about">ABOUT</Link>
                </li>
                <li>
                  <Link to="timeline" smooth={true} duration={500}>
                    TIMELINE
                  </Link>
                </li>
                <li>
                  <Link to="" duration={500} smooth={true}>
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="link-col2">
              <ul>
                <li>
                  <Link to="" duration={500} smooth={true}>
                    SPONSERS
                  </Link>
                </li>
                <li>
                  <Link to="" duration={500} smooth={true}>
                    PRIZES
                  </Link>
                </li>
                <li>
                  <Link to="" duration={500} smooth={true}>
                    EVENTS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="social">
            <h2>Connect with us!</h2>
            <div className="icons">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70"
              >
                <FaXTwitter size={30} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cr-footer"></div>
    </footer>
  );
};

export default Footer;
