import { useEffect, useRef, useState } from "react";
import "./Timeline.css";

const Timeline = () => {
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
    <section className="timeline-container" id="timeline">
      <div className="timeline-heading container">
        <img
          src="/pics/timeline.svg"
          alt="Timeline Heading"
          className="heading"
        />
      </div>
      <div className="timeline-cards" ref={cardsContainerRef}>
        {[...Array(8)].map((_, index) => (
          <div className={`card card${index + 1}`} key={index}>
            <div className="header">
              <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
              <h2>Event {index + 1}</h2>
            </div>
            <p>April {5 + index}, 2025</p>
          </div>
        ))}
      </div>
      <div className="custom-slider" ref={sliderRef}></div>
    </section>
  );
};

export default Timeline;
