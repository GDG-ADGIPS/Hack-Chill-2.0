import "./Herosection.css";
const Herosection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-section-heading">
          <h1>HACK&CHILL 2.0</h1>
          <img
            src="/pics/honeybee.png"
            alt=""
            className="hero-section-heading-image1"
          />
          <img
            src="/pics/honeybee.png"
            alt=""
            className="hero-section-heading-image2"
          />
        </div>
        <div className="hero-flower-images">
          <img src="/pics/blue.png" alt="flower" className="flower1" />
          <img src="/pics/red.png" alt="flower" className="flower2" />
          <img src="/pics/yellow.png" alt="flower" className="flower3" />
        </div>
      </div>
    </>
  );
};
export default Herosection;
