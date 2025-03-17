import { FaLinkedin } from "react-icons/fa";
import "./Team.css";

const Team = () => {
  return (
    <div className="team">
      <div className="team-header">
        <img src="/pics/ourteam.png" alt="OURTEAM" className="heading" />
      </div>

      <div className="grid-container">
        <div className="grid-item -my-[50px]">
          <img src="pics/ritika.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Ritika Budhiraja</h2>
            <a
              href="https://www.linkedin.com/in/ritika-budhiraja-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <img src="pics/shivansh.jpg" alt="Team Member" />
          <div className="details">
            <h2>Shivansh Sharma</h2>
            <a
              href="https://www.linkedin.com/in/shivanssharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>

        <div className="grid-item"></div>
        <div className="grid-item">
          <img src="pics/rohit.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Rohit</h2>
            <a
              href="https://www.linkedin.com/in/rohit-choudhary786"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div className="grid-item">
          <img src="pics/sagar.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Sagar Kumar Jha</h2>
            <a
              href="https://www.linkedin.com/in/sagar-kumar-jha-237405240/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item ">
          <img src="pics/siddharth.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Siddharth Upadhyay</h2>
            <a
              href="https://www.linkedin.com/in/siddharth-upadhyay-b512a610b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <img src="pics/zishan.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Zishan Ansari</h2>
            <a
              href="https://www.linkedin.com/in/zishan-ansari-307a58189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div className="grid-item">
          <img src="pics/kishan.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Kishan Kumar</h2>
            <a
              href="https://www.linkedin.com/in/kishan-kumar-00822428b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item ">
          <img src="pics/divyansh.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Divyansh Raj</h2>
            <a
              href="https://www.linkedin.com/in/divyansh-raj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <img src="pics/aaditya.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Aaditya Sharma</h2>
            <a
              href="https://www.linkedin.com/in/aadityasharma1094?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
