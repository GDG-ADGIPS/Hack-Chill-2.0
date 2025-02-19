import "./Tracks.css";

const Tracks = () => {
  return (
    <div className="tracks-container container" id="tracks">
      {/* SVG Header */}
      <div className="tracks-header">
        {/* Replace this with the SVG import */}
        <img
          src="pics/track.svg"
          alt="Tracks Header"
          className="tracks-header-image heading"
        />
      </div>

      {/* Tracks Container */}
      <div className="tracks-cards-container">
        {/* Track 1 */}
        <div className="track-card">
          <img
            src="pics/Blockchain.png" // Replace with the flag icon's path
            alt="Blockchain PNG"
            className="track-icon"
          />
          <h2 className="track-title">BlockChain</h2>
          <p className="track-description">
            Description goes here, write anything you want.
          </p>
        </div>

        {/* Track 2 */}
        <div className="track-card">
          <img
            src="pics/ARVR.png" // Replace with the flag icon's path
            alt="ARVR PNG"
            className="track-icon"
          />
          <h2 className="track-title">AR/VR</h2>
          <p className="track-description">
            Description goes here, write anything you want.
          </p>
        </div>

        {/* Track 3 */}
        <div className="track-card">
          <img
            src="pics/Cybersecurity.png" // Replace with the logo path
            alt="Cybersecurity PNG"
            className="track-icon"
          />
          <h2 className="track-title">Cybersec</h2>
          <p className="track-description">
            Description goes here, write anything you want.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
