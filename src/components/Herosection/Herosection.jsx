import { useState, useEffect } from "react";
import Register from "../Register/Register";
import "./Herosection.css";
import sunflower from "/pics/sunflower.png";
import RegisterButton from "/pics/register-bg.svg";
const Herosection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: 21 March 2025
    const targetDate = new Date("2025-03-21T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // If the target date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Run immediately and then set interval
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-section-heading">
        <h1>HACK & CHILL 2.0</h1>
        <img
          src="/pics/honeybee.png"
          alt="Honeybee decoration"
          className="hero-section-heading-image1"
        />
        <img
          src="/pics/honeybee.png"
          alt="Honeybee decoration"
          className="hero-section-heading-image2"
        />
      </div>

      <div className="countdown-container">
        <div className="countdown container ">
          <div className="time-section" id="days">
            <div className="time-label">DAYS</div>
            <div className="time-value">{timeLeft.days}</div>
          </div>
          <div className="time-section" id="hours">
            <div className="time-label">HOURS</div>
            <div className="time-value">{timeLeft.hours}</div>
          </div>
          <div className="time-section" id="minutes">
            <div className="time-label">MINS</div>
            <div className="time-value">{timeLeft.minutes}</div>
          </div>
          <div className="time-section" id="seconds">
            <div className="time-label">SECS</div>
            <div className="time-value">{timeLeft.seconds}</div>
          </div>
        </div>
      </div>

      <div className="hero-section-cta">
        <img src={sunflower} alt="" className="sunflower-mascot" />
        <Register />

        <button className="cta-button">
          <img src={RegisterButton} alt="" />
        </button>
      </div>
      <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="turbulence">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01 0.005"
              numOctaves="2"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Herosection;
