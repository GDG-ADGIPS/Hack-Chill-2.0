import React from "react";
import "./Herosection.css";
const Herosection = () => {
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
            <span className="number">60</span>
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
            <span className="number">60</span>
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
            <span className="number">60</span>
            <span className="label">mins</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
