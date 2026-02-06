import { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Add your carousel images here
  const carouselImages = [
    "/pics/carousel_1.JPG",
    "/pics/carousel_2.JPG",
    "/pics/carousel_3.JPG",
    "/pics/carousel_4.jpg",
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
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
            <div className="carousel-container">
              <button className="carousel-btn prev-btn" onClick={prevSlide}>
                &#8249;
              </button>
              
              <div className="carousel-wrapper">
                <div 
                  className="carousel-track"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {carouselImages.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`Slide ${index + 1}`}
                      className="carousel-image"
                    />
                  ))}
                </div>
              </div>

              <button className="carousel-btn next-btn" onClick={nextSlide}>
                &#8250;
              </button>

              <div className="carousel-dots">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>

            <p>
              Hack & Chill 3.0 is a 36-hour hackathon designed to spark
              creativity, foster collaboration among participants, and bring
              their groundbreaking ideas to life. As a participant, you’ll dive
              into an immersive experience filled with exciting workshops like
              the AI Explorers Workshop , inspiring guest lectures 🎙️, and
              hands-on mentoring from industry experts.
              <br />
              Work alongside talented peers to tackle real-world challenges,
              showcase your skills to a panel of esteemed judges , and compete
              for incredible prizes, including cash rewards and exclusive
              schwags. Beyond the competition, Hack & Chill 3.0 offers a vibrant
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
