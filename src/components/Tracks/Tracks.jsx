import React from "react";
import "./Tracks.css";

const Tracks = () => {
  return (
    <div className="tracks-container">
      {/* SVG Header */}
      <div className="tracks-header">
        {/* Replace this with the SVG import */}
        <img src="public/pics/track.svg" alt="Tracks Header" className="tracks-header-image" />
      </div>

      {/* Tracks Container */}
      <div className="tracks-cards-container">
        {/* Track 1 */}
        <div className="track-card">
          <img
            src="public/pics/palestineflag.png" // Replace with the flag icon's path
            alt="Palestine Flag"
            className="track-icon"
          />
          <h2 className="track-title">Free Palestine</h2>
          <p className="track-description">#Ceasefire</p>
        </div>

        {/* Track 2 */}
        <div className="track-card">
          <div className="track-placeholder">
            <span className="track-placeholder-text">$</span>
          </div>
          <h2 className="track-title">Title</h2>
          <p className="track-description">Description goes here, write anything you want.</p>
        </div>

        {/* Track 3 */}
        <div className="track-card">
          <img
            src="public/pics/clickableimage.svg" // Replace with the logo path
            alt="UXCEL Logo"
            className="track-icon"
          />
          <h2 className="track-title">UI Design Certification</h2>
          <p className="track-description">starting at $8/mo annually</p>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
