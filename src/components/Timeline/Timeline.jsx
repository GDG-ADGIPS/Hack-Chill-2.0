import { useEffect, useRef, useState } from "react";
import "./Timeline.css";
import Timelinebg from "/pics/timelinebg.svg";

const Timeline = () => {
  const style = {
    backgroundImage: `url(${Timelinebg})`,
  };
  const sliderRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScrollTop, setStartScrollTop] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const cardsContainer = cardsContainerRef.current;

    const updateSliderPosition = () => {
      const scrollPercentage =
        cardsContainer.scrollTop /
        (cardsContainer.scrollHeight - cardsContainer.clientHeight);
      const thumbPosition =
        scrollPercentage * (cardsContainer.clientHeight - 50); // Adjust for thumb height
      slider.style.setProperty("--thumb-top", `${thumbPosition}px`);

      // Add yellow color progress effect
      slider.style.background = `linear-gradient(to bottom, #F57C00 ${
        scrollPercentage * 100
      }%, #E4D9BA ${scrollPercentage * 100}%)`;
    };

    const handleScroll = () => {
      requestAnimationFrame(updateSliderPosition);
    };

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartY(e.clientY || e.touches[0].clientY);
      setStartScrollTop(cardsContainer.scrollTop);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const currentY = e.clientY || e.touches[0].clientY;
      const deltaY = currentY - startY;
      const scrollAmount = deltaY * 2; // Adjust sensitivity
      cardsContainer.scrollTop = startScrollTop + scrollAmount;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    cardsContainer.addEventListener("scroll", handleScroll);

    // Apply draggable only on smaller screens
    if (window.innerWidth <= 1024) {
      slider.addEventListener("mousedown", handleMouseDown);
      slider.addEventListener("touchstart", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleMouseMove, { passive: false });
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }

    updateSliderPosition();

    return () => {
      cardsContainer.removeEventListener("scroll", handleScroll);
      if (window.innerWidth <= 1024) {
        slider.removeEventListener("mousedown", handleMouseDown);
        slider.removeEventListener("touchstart", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchend", handleMouseUp);
      }
    };
  }, [isDragging, startY, startScrollTop]);

  return (
    <section className="timeline-container" style={style} id="timeline">
      <div className="timeline-heading container">
        <img
          src="/pics/timeline.svg"
          alt="Timeline Heading"
          className="heading"
        />
      </div>
      <div className="timeline-cards" ref={cardsContainerRef}>
        <div className="card card1">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Registration Starts</h2>
          </div>
          <p>March 1, 2025</p>
        </div>

        <div className="card card2">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Registration Ends</h2>
          </div>
          <p>March 15, 2025</p>
        </div>

        <div className="card card3">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 1 - Inauguration</h2>
          </div>
          <p>March 20, 2025 | 8:00AM</p>
        </div>

        <div className="card card4">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 1 - Hacking Starts</h2>
          </div>
          <p>March 20, 2025 | 9:00AM</p>
        </div>

        <div className="card card5">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 1 - Breakfast</h2>
          </div>
          <p>March 20, 2025 | 10:00AM</p>
        </div>

        <div className="card card6">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 1 - Mentoring</h2>
          </div>
          <p>March 20, 2025 | 12:00PM</p>
        </div>

        <div className="card card7">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 1 - Lunch</h2>
          </div>
          <p>March 20, 2025 | 3:00PM</p>
        </div>

        <div className="card card8">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 1 - See off</h2>
          </div>
          <p>March 20, 2025 | 6:30PM</p>
        </div>

        <div className="card card3">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 2 - Inauguration</h2>
          </div>
          <p>March 21, 2025 | 8:00AM</p>
        </div>

        <div className="card card4">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 2 - Hacking Starts</h2>
          </div>
          <p>March 21, 2025 | 9:00AM</p>
        </div>

        <div className="card card5">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 2 - Breakfast</h2>
          </div>
          <p>March 21, 2025 | 10:00AM</p>
        </div>

        <div className="card card6">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 2 - Mentoring</h2>
          </div>
          <p>March 21, 2025 | 12:00PM</p>
        </div>

        <div className="card card7">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 2 - Lunch</h2>
          </div>
          <p>March 21, 2025 | 3:00PM</p>
        </div>

        <div className="card card8">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 2 - See off</h2>
          </div>
          <p>March 21, 2025 | 6:30PM</p>
        </div>
        <div className="card card3">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 3 - Inauguration</h2>
          </div>
          <p>March 22, 2025 | 8:00AM</p>
        </div>

        <div className="card card4">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 3 - Hacking Starts</h2>
          </div>
          <p>March 22, 2025 | 9:00AM</p>
        </div>

        <div className="card card5">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 3 - Breakfast</h2>
          </div>
          <p>March 22, 2025 | 10:30AM</p>
        </div>

        <div className="card card6">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 3 - Mentoring</h2>
          </div>
          <p>March 22, 2025 | 12:00PM</p>
        </div>

        <div className="card card7">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 3 - Lunch</h2>
          </div>
          <p>March 22, 2025 | 3:00PM</p>
        </div>

        <div className="card card8">
          <div className="header">
            <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
            <h2>Day 3 - Results and Winner Announcement</h2>
          </div>
          <p>March 22, 2025 | 4:30PM</p>
        </div>
      </div>

      <div className="custom-slider" ref={sliderRef}></div>
    </section>
  );
};

export default Timeline;
