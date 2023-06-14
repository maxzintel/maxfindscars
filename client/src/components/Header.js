// Header.js
import React, { useState } from 'react';
import SignupForm from './SignupForm';

const Header = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleOpenSignupModal = () => {
    setShowSignupModal(true);
  };

  const handleCloseSignupModal = () => {
    setShowSignupModal(false);
  };

  return (
    <header className="p-5 justify-between ml-3 mr-3 mt-3 mb-1 bg-antiquewhite">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">MaxFindsCars</span>
            <img className="h-36 md:h-24 sm:h-24 w-auto object-contain" src={`${process.env.PUBLIC_URL}/logos/logo.png`} alt="Logo" />
          </a>
        </div>
        <div className="flex items-center">
          <button onClick={handleOpenSignupModal} className="p-3 outline-2 border-black border-2 bg-yellow font-bold cursor-pointer">SUBSCRIBE</button>
        </div>
      </nav>
      {showSignupModal && <Modal onClose={handleCloseSignupModal} />}
    </header>
  );
};

const Modal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
    <div className="relative bg-antiquewhite p-8 outline-2 border-black border-2 w-3/4 md:w-1/2">
      <button onClick={onClose} className="absolute top-1 right-2 text-2xl">
          &times;
      </button>
      <SignupForm />
    </div>
  </div>
);

export default Header;
