import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Tracks.css";

const tracks = [
  {
    id: 1,
    title: "BLOCKCHAIN",
    img: "pics/Blockchain.png",
    description: "Build dApps, smart contracts, and Web3 solutions.",
  },
  {
    id: 2,
    title: "AI/ML",
    img: "pics/aiml.png",
    description: "Create AI-driven and machine learning models.",
  },
  {
    id: 3,
    title: "WEB DEV",
    img: "pics/webd.png",
    description: "Develop scalable and modern web apps.",
  },
  {
    id: 4,
    title: "IOT",
    img: "pics/iot.png",
    description: "Connect smart devices with IoT solutions.",
  },
  {
    id: 5,
    title: "CYBERSECURITY",
    img: "pics/Cybersecurity.png",
    description: "Secure systems with encryption and ethical hacking.",
  },
];

const Tracks = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextTrack = () => {
    setIndex((prev) => (prev + 1) % tracks.length);
  };

  // Auto-scroll every 3 seconds (only for desktop)
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        nextTrack();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="tracks-container container" id="tracks">
      <div className="tracks-header">
        <img
          src="pics/track.svg"
          alt="Tracks Header"
          className="tracks-header-image heading"
        />
      </div>

      {isMobile ? (
        // Mobile view: all cards in a column
        <div className="tracks-mobile-view">
          {tracks.map((track) => (
            <div key={track.id} className="track-card mobile-card">
              <img src={track.img} alt={track.title} className="track-icon" />
              <h2 className="track-title">{track.title}</h2>
              <p className="track-description">{track.description}</p>
            </div>
          ))}
        </div>
      ) : (
        // Desktop view: carousel
        <div className="tracks-carousel" onClick={nextTrack}>
          <AnimatePresence>
            {[...Array(3)].map((_, i) => {
              const trackIndex = (index + i) % tracks.length;
              let position = "left"; // Default to left

              if (i === 1) position = "center";
              else if (i === 2) position = "right";

              return (
                <motion.div
                  key={tracks[trackIndex].id}
                  className={`track-card ${position}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: position === "center" ? 1.15 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={tracks[trackIndex].img}
                    alt={tracks[trackIndex].title}
                    className="track-icon"
                  />
                  <h2 className="track-title">{tracks[trackIndex].title}</h2>
                  <p className="track-description">
                    {tracks[trackIndex].description}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Tracks;
