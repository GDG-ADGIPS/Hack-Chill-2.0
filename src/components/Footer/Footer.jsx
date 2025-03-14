import { ArrowUpRight } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="header-section footer-hidden">
          <h1 className="main-heading">
            <span className="white-text">No Bugs,</span>
            <br />
            <span className="red-text">Just Good Vibes.</span>
          </h1>
          <img src="/pics/sun.png" alt="Sun mascot" className="mascot" />
        </div>

        <div className="info-sections">
          <div className="venue-section footer-hidden">
            <h2>THE VENUE</h2>
            <p>
              Dr. Akhilesh Das Gupta Institute of Professional Studies (ADGIPS)
              <br />
              Shastri Park, NEW DELHI
            </p>

            {/* <div className="signup-section">
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
            </div> */}
          </div>

          <div className="about-section">
            <h2>ABOUT US</h2>
            <img
              src="/pics/honeybee.png"
              alt="honey-bee"
              className="honeybee"
            />
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
            <img
              src="/pics/beach-mascot.svg"
              alt="mascot-chilling"
              className="beach-mascot"
            />
          </div>

          <div className="contact-section">
            <h2>LET TALK FAM</h2>
            <img
              src="/pics/honeybee.png"
              alt="honey-bee"
              className="honeybee"
            />
            <p>Questions? Comments?</p>
            <p>Brand recs? Email us!</p>
            <p>
              <a href="mailto:dscadgitmdelhi@gmail.com">
                dscadgitmdelhi@gmail.com
              </a>
            </p>
            <br />
            <div className="call-container">
              <p>Shoot us a text!</p>
              <a
                href="http://wa.me/9625382247"
                target="_blank"
                className="call-number"
              >
                9625382247
              </a>
            </div>
          </div>

          <div className="mobile-mascot-image">
            <img src="/pics/sun.png" alt="footer-mascot" />
          </div>

          <div className="social-links">
            <a
              href="https://www.instagram.com/hacknchill_2.0/"
              className="social-link"
            >
              <span>INSTAGRAM</span>
              <ArrowUpRight />
            </a>
            <a href="https://linktr.ee/hacknchill2.0" className="social-link">
              <span>LINKEDIN</span>
              <ArrowUpRight />
            </a>
            <a href="https://linktr.ee/hacknchill2.0" className="social-link">
              <span>H&C COMMUNITY</span>
              <ArrowUpRight />
            </a>
            <a href="https://linktr.ee/hacknchill2.0" className="social-link">
              <span>H&C ON X</span>
              <ArrowUpRight />
            </a>
          </div>

          <div className="mobile-view-container">
            <div className="mobile-footer-links">
              <a
                href="https://linktr.ee/hacknchill2.0"
                className="mobile-social-link"
              >
                <img src="/pics/footer-icon-3.svg" alt="footer-link" />
              </a>
              <a
                href="https://linktr.ee/hacknchill2.0"
                className="mobile-social-link"
              >
                <img src="/pics/footer-icon-2.svg" alt="footer-link" />
              </a>
              <a
                href="https://linktr.ee/hacknchill2.0"
                className="mobile-social-link"
              >
                <img src="/pics/footer-icon-4.svg" alt="footer-link" />
              </a>
              <a
                href="https://linktr.ee/hacknchill2.0"
                className="mobile-social-link"
              >
                <img src="/pics/footer-icon-1.svg" alt="footer-link" />
              </a>
            </div>

            <div className="signup-section mobile-signup-section">
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
