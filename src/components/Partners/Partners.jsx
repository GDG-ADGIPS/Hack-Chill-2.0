import "./Partners.css";
import Button from "../Button";

const Partners = () => {
  const partnersData = [
    {
      name: "DEVFOLIO LOGO",
      logo: "/pics/Devfolio.png",
      link: "https://devfolio.co/",
    },
    {
      name: "ETHINDIA LOGO",
      logo: "/pics/ETHIndia.png",
      link: "https://ethindia.co",
    },
    {
      name: "POLYGON LOGO",
      logo: "/pics/Polygon_blockchain_logo.png",
      link: "https://polygon.technology/",
    },
    {
      name: "name",
      logo: "/pics/BobbleAI.png",
      link: "https://github.com/GDG-ADGIPS/Hack-Chill-2.0",
    },

    {
      name: "name",
      logo: "/pics/xyz.jpeg",
      link: "https://github.com/GDG-ADGIPS/Hack-Chill-2.0",
    },
    {
      name: "name",
      logo: "/pics/Decathlon-Logo.jpg",
      link: "https://github.com/GDG-ADGIPS/Hack-Chill-2.0",
    },
    {
      name: "name",
      logo: "/pics/orkes_logo.png",
      link: "https://github.com/GDG-ADGIPS/Hack-Chill-2.0",
    },
    {
      name: "name",
      logo: "/pics/kwikpic_logo.png",
      link: "https://github.com/GDG-ADGIPS/Hack-Chill-2.0",
    },
  ];

  return (
    <div className="partners-container container">
      <div className="partners-header">
        <img src="/pics/prevsponsors.svg" alt="" className="heading" />
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

export default Partners;
