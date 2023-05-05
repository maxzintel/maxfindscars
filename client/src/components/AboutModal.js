// AboutModal.js
import React from 'react';

const AboutModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-antiquewhite p-8 outline-2 border-black border-2 relative">
        <button onClick={onClose} className="top-2 right-2 absolute">
          &times;
        </button>
        <h2 className='font-bold text-lg text-center'>ABOUT MAX</h2>
        <div className="flex flex-col items-center justify-center mt-4">
          <img src={`${process.env.PUBLIC_URL}/img/IMG_2954.jpg`} alt="Max" className="h-32 w-auto object-contain mb-4 rounded-md" />
          <p className="text-center">This is Max!</p>
          <p className="text-center">You know, the Max finding the cars. Max has been into cars his whole life, ever since he cried for days after leaving his Hot Wheels Audi TT on a plane when he was 5.</p>
          <p className="text-center">Growing up, Max was the type of kid that would stare straight into the headlights of oncoming traffic to try to figure out what type of car was coming towards him. He read every Motortrend magazine, memorized every new car's horsepower and 0-60 times, and got a job when he was 14 so he could save up for his first car.

          When he FINALLY turned 16, Max's parents helped him buy a 2002 Mazda Protege 5 in white with a manual transmission. Max LOVED this car, and quit his old job to instead work as a pizza delivery driver just so he could spend more time in his new ride. He spent his first paycheck on satin black paint (to paint the wheels), a massive subwoofer, and a stereo with bluetooth.
          </p>
          {/* Add more content here */}
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
