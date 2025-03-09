import { useRef, useEffect, useState } from "react";
import "./Prizes.css";
const Prizes = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="prizes">
      <div className="prizes-header">
        <img src="/pics/prizes.svg" alt="" className="heading" />
      </div>
      <div
        ref={containerRef}
        className={`container-prize ${isVisible ? "visible" : ""}`}
      >
        <div className="card-prize">
          <h1>Tech Exposure</h1>
          <ul>
            <li>
              <h3>Hands-on Learning:</h3> Work with real-world tech stacks and
              innovative tools.
            </li>
            <li>
              <h3>Project Building:</h3> Develop practical solutions to
              challenging problems.
            </li>
            <li>
              <h3>Team Collaboration:</h3> Collaborate with like-minded tech
              enthusiasts and build meaningful connections.
            </li>
          </ul>
        </div>
        <div className="card-prize">
          <h1>Prize Pool</h1>
          <h2>Rs. 1,00,000+</h2>
        </div>
        <div className="card-prize">
          <h1>Career Boost Mentorship</h1>
          <ul>
            <li>
              <h3>Mentorship:</h3> Gain insights from industry professionals and
              tech experts.
            </li>
            <li>
              <h3>Networking:</h3> Expand your professional network within the
              tech community.
            </li>
            <li>
              <h3>Opportunities:</h3> Showcase your skills, win recognition, and
              open doors to future internships and jobs.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
