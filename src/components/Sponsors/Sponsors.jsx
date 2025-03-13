import React from "react";
import "./Sponsors.css";
import Button from "../Button";
const Sponsors = () => {
  const partnersData = [
    {
      name: "Ducat LOGO",
      logo: "/pics/ducat.png",
      link: "https://www.ducatindia.com/",
    },
    {
      name: "GITHUB LOGO",
      logo: "/pics/github-mark.png",
      link: "https://github.com/",
    },
    {
      name: "BIFROST LOGO",
      logo: "/pics/bifrost.png",
      link: "https://bifrost.io/",
    },
    {
      name: "H2S LOGO",
      logo: "/pics/Krafton.png",
      link: "https://krafton.com/en/",
    },
  ];

  return (
    <div className="partners-container container" id="sponsors">
      <div className="partners-header">
        <img src="/pics/Our_sponsors.svg" alt="" className="heading" />
      </div>
      <div className="partners-grid">
        {partnersData.map((partner, index) => (
          <Button
            key={partner.name}
            href={partner.link}
            className={`partner-card ${index % 2 === 0 ? "even" : "odd"}`}
            target="_blank"
            rel="noopener noreferrer"
            logo={partner.logo}
            alt={partner.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
