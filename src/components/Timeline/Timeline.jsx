import { useEffect } from "react";
import "./Timeline.css";

const Timeline = () => {
  // Timeline.jsx
  useEffect(() => {
    const slider = document.querySelector(".custom-slider");
    const cardsContainer = document.querySelector(".timeline-cards");

    const updateSliderPosition = () => {
      if (window.innerWidth > 768) {
        // Vertical scroll logic
        const scrollPercentage =
          cardsContainer.scrollTop /
          (cardsContainer.scrollHeight - cardsContainer.clientHeight);
        const thumbPosition =
          scrollPercentage * (cardsContainer.clientHeight - 40);
        slider.style.setProperty("--thumb-top", `${thumbPosition}px`);
        slider.style.background = `linear-gradient(to bottom, #F57C00 ${
          scrollPercentage * 100
        }%, #E4D9BA ${scrollPercentage * 100}%)`;
      } else {
        // Horizontal scroll logic
        const scrollPercentage =
          cardsContainer.scrollLeft /
          (cardsContainer.scrollWidth - cardsContainer.clientWidth);

        // Use slider's width instead of container's
        const sliderWidth = slider.offsetWidth;
        const thumbWidth = 25; // Match thumb size
        const thumbPosition = scrollPercentage * (sliderWidth - thumbWidth);

        slider.style.setProperty("--thumb-left", `${thumbPosition}px`);
        slider.style.background = `linear-gradient(to right, #F57C00 ${
          scrollPercentage * 100
        }%, #E4D9BA ${scrollPercentage * 100}%)`;
      }
    };

    const handleScroll = () => {
      requestAnimationFrame(updateSliderPosition);
    };

    // Handle resize to switch between modes
    const handleResize = () => {
      requestAnimationFrame(updateSliderPosition);
    };

    cardsContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial position
    updateSliderPosition();

    return () => {
      cardsContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="timeline-container" id="timeline">
      <div className="timeline-heading">
        <img
          src="/pics/timeline.svg"
          alt="Timeline Heading"
          className="heading"
        />
      </div>
      <div className="timeline-cards">
        <div className="card card1">
          <div className="header">
            <img
              src="/pics/calendar-fold.png"
              alt="Calendar Icon"
              className="timeline-calendar"
            />
            <h2>Registration Starts</h2>
          </div>
          <p>March 5, 2025</p>
        </div>
        <div className="card card2">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Registration Ends</h2>
          </div>
          <p>April 17, 2025</p>
        </div>
        <div className="card card3">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Ideathon</h2>
          </div>
          <p>April 19-20, 2025</p>
        </div>
        <div className="card card4">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Ideathon Results</h2>
          </div>
          <p>April 21, 2025</p>
        </div>
        <div className="card card5">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Speaker Sessions</h2>
          </div>
          <p>April 22-23, 2025</p>
        </div>
        <div className="card card6">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Hack&Chill Day-1</h2>
          </div>
          <p>April 25, 2025</p>
        </div>
        <div className="card card7">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Hack&Chill Day</h2>
          </div>
          <p>April 26, 2025</p>
        </div>
        <div className="card card8">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Hack&Chill Final</h2>
          </div>
          <p>April 27, 2025</p>
        </div>
      </div>
      <div className="custom-slider"></div>
    </section>
  );
};

export default Timeline;
