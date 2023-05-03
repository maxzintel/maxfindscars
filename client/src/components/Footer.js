// Footer.js
import React, {useState} from 'react';
import ContactInfo from './ContactInfo';

const Footer = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleContactClick = () => {
    setShowContactInfo(true);
  };

  const handleCloseInfo = () => {
    setShowContactInfo(false);
  };

  return (
    <footer className="footer-container m-3 px-10 py-4 flex items-center justify-center bg-antiquewhite">
      <p className="mr-auto">2023, MaxFindsCars LLC</p>
      {showContactInfo && <ContactInfo onClose={handleCloseInfo} />}
      <button onClick={handleContactClick} className="mx-2 p-1 outline-2 border-black border-2 bg-yellow font-bold">CONTACT</button>
      <a href="https://twitter.com/maxjzin" className="mx-1">
        <img src={`${process.env.PUBLIC_URL}/logos/Twitter-logo.svg.png`} alt="Twitter Icon" className="h-6" />
      </a>
      <a href="https://github.com/maxzintel" className="mx-1">
        <img src={`${process.env.PUBLIC_URL}/logos/25231.png`} alt="GitHub Icon" className="h-6" />
      </a>
    </footer>
  );
};

export default Footer;
