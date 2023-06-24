// import React from 'react';

// const StickySubscribeButton = () => {
//   return (
//     <button className="p-3 outline-2 border-black border-2 bg-yellow font-bold cursor-pointer sticky top-10 right-0 z-50">
//       SUBSCRIBE
//     </button>
//   );
// };

// export default StickySubscribeButton;

import React, { useState } from 'react';
import SignupForm from './SignupForm';

const StickySubscribeButton = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleOpenSignupModal = () => {
    setShowSignupModal(true);
  };

  const handleCloseSignupModal = () => {
    setShowSignupModal(false);
  };

  return (
    <>
      <button
        onClick={handleOpenSignupModal}
        className="p-3 outline-2 border-black border-2 bg-yellow font-bold cursor-pointer sticky top-10 right-0 z-50">
        SUBSCRIBE
      </button>
      {showSignupModal && <Modal onClose={handleCloseSignupModal} />}
    </>
  );
};

const Modal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
    <div className="relative bg-antiquewhite p-8 border-2 border-black w-3/4 md:w-1/2">
      <button onClick={onClose} className="absolute top-1 right-2 text-2xl">
        &times;
      </button>
      <SignupForm />
    </div>
  </div>
);

export default StickySubscribeButton;
