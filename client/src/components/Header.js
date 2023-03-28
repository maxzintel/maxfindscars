// Header.js
import React from 'react';
import SignupForm from './SignupForm';

const Header = () => {
  return (
    <header className="p-5 justify-between ml-3 mr-3 mt-3 mb-1 bg-antiquewhite">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">MaxFindsCars</span>
            <img className="h-36 w-auto object-contain" src="./logos/logo.png" alt="Logo" />
          </a>
        </div>
        {/* <SignupForm /> */}
      </nav>
    </header>
  );
};

export default Header;
