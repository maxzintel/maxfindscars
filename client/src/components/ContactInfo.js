// ContactInfo.js
import React from 'react';

const ContactInfo = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative bg-antiquewhite p-8 outline-2 border-black border-2">
        <button onClick={onClose} className="absolute top-1 right-2 text-2xl">
          &times;
        </button>
        <h2 className='font-bold text-lg text center'>CONTACT MAX</h2>
        <ul className="list-disc list-outside ml-5">
          <li className="mb-2">
            <a className="text-blue-700 underline" href="https://3h584gks8ko.typeform.com/to/tqsEcHkw">
            🏎️💨 Contact for advertising
            </a>
          </li>
          <li className="mb-2">
            <a className="text-blue-700 underline" href="https://3h584gks8ko.typeform.com/to/ZQi4qdmn" >
              🏷️💲 Contact to promote a car sale
            </a>
          </li>
          <li className="mb-2">
            <a className="text-blue-700 underline" href='https://twitter.com/maxjzin' >
            🤭😂 Contact just to chat with Max
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
