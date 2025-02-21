import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "./Team.css";

const Team = () => {
  return (
    <div className="team">
      <div className="team-header">
        <h1>OUR TEAM</h1>
        <p>
            Our team has 30+ years experience in building tech-enabled
            startups. Ranging from failures to successes, each venture leading to
            a lot of experience and knowledge earned.
          </p>
          </div>

      <div className="grid-container">
      <div className="grid-item -my-[50px]">
  <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" alt="Team Member" />
  <div className="details">
    <h2>Michael Liam</h2>
    <h3>Founder & CEO</h3>
    <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
      <FaLinkedin  className="linkedin-icon" />
    </a>
  </div>
</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item">
  <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" alt="Team Member" />
  <div className="details">
  <h2>Michael Liam</h2>
    <h3>Founder & CEO</h3>
    <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
      <FaLinkedin  className="linkedin-icon" />
    </a>
  </div>
</div>

        <div className="grid-item"></div>
        <div className="grid-item">
  <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" alt="Team Member" />
  <div className="details">
  <h2>Michael Liam</h2>
    <h3>Founder & CEO</h3>
    <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
      <FaLinkedin  className="linkedin-icon" />
    </a>
  </div>
</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div className="grid-item">
  <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" alt="Team Member" />
  <div className="details">
  <h2>Michael Liam</h2>
    <h3>Founder & CEO</h3>
    <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
      <FaLinkedin  className="linkedin-icon" />
    </a>
  </div>
</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item ">
  <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" alt="Team Member" />
  <div className="details">
  <h2>Michael Liam</h2>
    <h3>Founder & CEO</h3>
    <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
      <FaLinkedin  className="linkedin-icon" />
    </a>
  </div>
</div>
      </div>
    </div>
  );
};

export default Team;
