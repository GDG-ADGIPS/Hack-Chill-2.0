import './Partners.css';
import Button from './Button';

const Partners = () => {
  const partnersData = [
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' },
    { name: 'name', logo: '/pics/sample.png', link: 'https://github.com/GDG-ADGIPS/Hack-Chill-2.0' }
  ];

  return (
    <div className="partners-container">
      <div className="partners-header">
        <img src="	https://hackathon.hackthisfall.tech/images/icons/home/arrows.svg" alt="icon" />
        Partners
      </div>
      <div className="partners-grid">
        {partnersData.map((partner, index) => (
          <Button
            key={partner.name}
            href={partner.link}
            className={`partner-card ${index % 2 === 0 ? 'even' : 'odd'}`}
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