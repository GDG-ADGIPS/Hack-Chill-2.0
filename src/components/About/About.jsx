import "./About.css";
const About = () => {
  return (
    <>
      <div className="some">
        <div className="marquee-wrapper-hero">
          <div className="marquee-container-hero marquee-top-hero">
            <div className="marquee-content-hero">
              {[...Array(50)].map((_, i) => (
                <span key={i}>HACK&CHILL • हैक एंड चिल • </span>
              ))}
            </div>
          </div>
          {/* <div className="marquee-container-hero marquee-bottom-hero">
            <div className="marquee-content-hero">
              {[...Array(50)].map((_, i) => (
                <span key={i}>HACK&CHILL • हैक एंड चिल • </span>
              ))}
            </div>
          </div> */}
        </div>
        <div className="AboutUs container" id="about">
          <div className="aboutUS-heading">
            <img src="/pics/aboutus.svg" alt="" className="heading" />
          </div>
          <div className="aboutus-content">
            <img src="/pics/aboutus.png" alt="" />
            <p>
              Hack & Chill 2.0 is a 36-hour hackathon designed to spark
              creativity, foster collaboration among participants, and bring
              their groundbreaking ideas to life. As a participant, you’ll dive
              into an immersive experience filled with exciting workshops like
              the AI Explorers Workshop , inspiring guest lectures 🎙️, and
              hands-on mentoring from industry experts.
              <br />
              Work alongside talented peers to tackle real-world challenges,
              showcase your skills to a panel of esteemed judges , and compete
              for incredible prizes, including cash rewards and exclusive
              schwags. Beyond the competition, Hack & Chill 2.0 offers a vibrant
              atmosphere, networking opportunities with tech leaders , and the
              chance to leave your mark on the world of innovation. Join us for
              an unforgettable journey where learning, creativity, and impact
              come together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
