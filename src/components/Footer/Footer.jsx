import { ArrowUpRight } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="header-section">
          <h1 className="main-heading">
            <span className="white-text">No Bugs,</span>
            <br />
            <span className="red-text">Just Good Vibes.</span>
          </h1>
          <img src="/pics/sun.png" alt="Sun mascot" className="mascot" />
        </div>

        <div className="info-sections">
          <div className="venue-section">
            <h2>THE VENUE</h2>
            <p>
              Dr. Akhilesh Das Gupta Institute of Professional Studies (ADGIPS)
              <br />
              Shastri Park, NEW DELHI
            </p>

            <div className="signup-section">
              <h3>BE A PART OF THE FAM!</h3>
              <div className="email-input-container">
                <input
                  type="email"
                  placeholder="Enter your mail here"
                  className="email-input"
                />
                <div className="arrow-container">
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>ABOUT US</h2>
            <ul>
              <li>
                <a href="">About Hack&Chill</a>
              </li>
              <li>
                <a href="">Organizing Team</a>
              </li>
              <li>
                <a href="">Our Sponsors</a>
              </li>
              <li>
                <a href="">Previous Sponsors</a>
              </li>
              <li>
                <a href="">GDG Community</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
            </ul>
          </div>

          <div className="contact-section">
            <h2>LET TALK FAM</h2>
            <p>
              <a href="">Questions? Comments?</a>
            </p>
            <p>
              <a href="">Brand recs? Email us!</a>
            </p>
            <p>
              <a href="">dscadgitmdelhi@gmail.com</a>
            </p>
            <br />
            <div className="call-container">
              <p>Shoot us a text!</p>
              <a href="tel:9296000784" className="call-number">
                929-6000-PUG
              </a>
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">
              <span>INSTAGRAM</span>
              <ArrowUpRight />
            </a>
            <a href="#" className="social-link">
              <span>LINKEDIN</span>
              <ArrowUpRight />
            </a>
            <a href="#" className="social-link">
              <span>H&C COMMUNITY</span>
              <ArrowUpRight />
            </a>
            <a href="#" className="social-link">
              <span>H&C ON X</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          <span>HACK&CHILL • हैक एंड चिल • </span>
          <span>HACK&CHILL • हैक एंड चिल • </span>
          <span>HACK&CHILL • हैक एंड चिल • </span>
          <span>HACK&CHILL • हैक एंड चिल • </span>
          <span>HACK&CHILL • हैक एंड चिल • </span>
          <span>HACK&CHILL • हैक एंड चिल • </span>
          <span>HACK&CHILL • हैक एंड चिल • </span>
          <span>HACK&CHILL • हैक एंड चिल • </span>
          <span>HACK&CHILL • हैक एंड चिल • </span>
          <span>HACK&CHILL • हैक एंड चिल • </span>
          <span>HACK&CHILL • हैक एंड चिल • </span>
          <span>HACK&CHILL • हैक एंड चिल • </span>
        </div>
      </div>
    </div>
  );
}
