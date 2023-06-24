import React, { useState } from 'react';
import ContactInfo from './ContactInfo';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm'; // import the SignupForm

const Footer = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false); // new state for signup modal

  const handleContactClick = () => {
    setShowContactInfo(true);
  };

  const handleCloseInfo = () => {
    setShowContactInfo(false);
  };

  const handleOpenSignupModal = () => {  // new handler for opening signup modal
    setShowSignupModal(true);
  };

  const handleCloseSignupModal = () => { // new handler for closing signup modal
    setShowSignupModal(false);
  };

  return (
    <footer className="footer-container m-3 px-4 py-4 flex flex-col sm:flex-row items-center justify-center bg-antiquewhite">
      <p className="mr-0 sm:mr-auto mb-2 sm:mb-0 text-center">2023, MaxFindsCars LLC</p>
      {showContactInfo && <ContactInfo onClose={handleCloseInfo} />}
      {showSignupModal && <Modal onClose={handleCloseSignupModal} />} {/* New Modal */}
      <button onClick={handleContactClick} className="mx-1 p-1 outline-2 border-black border-2 bg-yellow font-bold mb-2 sm:mb-0">CONTACT</button>
      <button onClick={handleOpenSignupModal} className="mx-1 p-1 outline-2 border-black border-2 bg-yellow font-bold mb-2 sm:mb-0">SUBSCRIBE</button> {/* New Subscribe button */}
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

const Modal = ({ onClose }) => (  // New Modal Component
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
    <div className="relative bg-antiquewhite p-8 outline-2 border-black border-2 w-3/4 md:w-1/2">
      <button onClick={onClose} className="absolute top-1 right-2 text-2xl">
          &times;
      </button>
      <SignupForm />
    </div>
  </div>
);

export default Footer;
