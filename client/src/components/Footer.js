import React, { useState } from 'react';
import ContactInfo from './ContactInfo';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleContactClick = () => {
    setShowContactInfo(true);
  };

  const handleCloseInfo = () => {
    setShowContactInfo(false);
  };

  return (
    <footer className="footer-container m-3 px-4 py-4 flex flex-col sm:flex-row items-center justify-center bg-antiquewhite">
      <p className="mr-0 sm:mr-auto mb-2 sm:mb-0 text-center">2023, MaxFindsCars LLC</p>
      {showContactInfo && <ContactInfo onClose={handleCloseInfo} />}
      <button onClick={handleContactClick} className="mx-1 p-1 outline-2 border-black border-2 bg-yellow font-bold mb-2 sm:mb-0">CONTACT</button>
      {/* <Link to="/about" className="mx-2 p-1 outline-2 border-black border-2 bg-yellow font-bold mb-2 sm:mb-0 block text-center">ABOUT</Link> */}
      <div className="flex">
        <a href="https://twitter.com/maxjzin" className="mx-1">
          <img src={`${process.env.PUBLIC_URL}/logos/Twitter-logo.svg.png`} alt="Twitter Icon" className="h-6" />
        </a>
        <a href="https://github.com/maxzintel" className="mx-1">
          <img src={`${process.env.PUBLIC_URL}/logos/25231.png`} alt="GitHub Icon" className="h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
