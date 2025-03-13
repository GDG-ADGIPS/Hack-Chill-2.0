import React from 'react'
import "./Sponsors.css"
import Button from '../Button';
const Sponsors = () => {
  const partnersData = [
     {
       name: "DEVFOLIO LOGO",
       logo: "/pics/Devfolio.png",
       link: "https://devfolio.co/",
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
       logo: "/pics/H2S_logo.png",
       link: "https://hack2skill.com/",
     }
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
}

export default Sponsors;