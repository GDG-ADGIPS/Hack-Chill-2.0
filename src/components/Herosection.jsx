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
        <img src="/pics/redflower.svg" alt="Red flower" className="flower2" />
        <img src="/pics/blueflower.svg" alt="Blue flower" className="flower1" />

        <img
          src="/pics/yellowflower.svg"
          alt="Yellow flower"
          className="flower3"
        />
      </div>
    </div>
  );
};

export default Herosection;
