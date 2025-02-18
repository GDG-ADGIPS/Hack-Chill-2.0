import { useState, useEffect } from "react";
import Register from "../Register/Register";
import "./Herosection.css";

const Herosection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
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

        setTimeLeft({ days, hours, minutes });
      } else {
        // If the target date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    const timer = setInterval(updateCountdown, 1000); // Update every second
    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-section-heading">
        <h1>HACK&CHILL 2.0</h1>
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
      <div className="hero-flower-images">
        <div className="flower-container">
          <img src="/pics/redflower.svg" alt="Red flower" className="flower" />
          <div className="countdown red">
            <span className="number">{timeLeft.days}</span>
            <span className="label">days</span>
          </div>
        </div>

        <div className="flower-container">
          <img
            src="/pics/blueflower.svg"
            alt="Blue flower"
            className="flower"
          />
          <div className="countdown blue">
            <span className="number">{timeLeft.hours}</span>
            <span className="label">hours</span>
          </div>
        </div>

        <div className="flower-container">
          <img
            src="/pics/yellowflower.svg"
            alt="Yellow flower"
            className="flower"
          />
          <div className="countdown yellow">
            <span className="number">{timeLeft.minutes}</span>
            <span className="label">mins</span>
          </div>
        </div>
      </div>
      <Register />
    </div>
  );
};

export default Herosection;
