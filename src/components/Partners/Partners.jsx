import "./Partners.css";
import Button from "../Button";

const Partners = () => {
  const partnersData = [
    {
      name: "name",
      logo: "/pics/BobbleAI.png",
      link: "https://github.com/GDG-ADGIPS/Hack-Chill-2.0",
    },
    {
      name: "name",
      logo: "/pics/ETHIndia.png",
      link: "https://github.com/GDG-ADGIPS/Hack-Chill-2.0",
    },
    {
      name: "name",
      logo: "/pics/Devfolio.png",
      link: "https://github.com/GDG-ADGIPS/Hack-Chill-2.0",
    },
    {
      name: "name",
      logo: "/pics/xyz.jpeg",
      link: "https://github.com/GDG-ADGIPS/Hack-Chill-2.0",
    },
  ];

  return (
    <div className="partners-container">
      <div className="partners-header">
        <img src="/pics/prevsponsers.svg" alt="" />
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
