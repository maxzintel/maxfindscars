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
          <p className="text-center text-lg font-semibold">This is Max!</p>
          <div className="space-y-4">
            <p className="text-center">
              Max has been into cars his whole life, ever since he cried for days after
              leaving his <i>Hot Wheels Audi TT</i> on a plane when he was 5. 🚙
            </p>
            <p className="text-center">
              Growing up, Max was the type of kid that would stare straight into the
              headlights of oncoming traffic to try to figure out what type of car was
              coming towards him. He read every <b>Motortrend</b> magazine, memorized
              every new car's horsepower and 0-60 times, and got a job when he was 14 so
              he could save up for his first car. 🏁
            </p>
            <p className="text-center">
              When he <b>FINALLY</b> turned 16, Max's parents helped him buy a 2002 Mazda
              Protege 5 in white with a manual transmission. Max <i>LOVED</i> this car,
              and quit his old job to instead work as a pizza delivery driver just so he
              could spend more time in his new ride. He spent his first paycheck on satin
              black paint (to paint the wheels), a massive subwoofer, and a stereo with
              bluetooth. 🎶
            </p>
            <p className="text-center text-lg font-semibold">Max's Car History 📚</p>
            <p className="text-center">
              Through the years, Max has owned/leased:
              <ul className="list-disc list-inside">
                <li>
                  🚗 2003 VW Jetta GLI (with a sick Borla exhaust)
                </li>
                <li>
                  🚗 2014 Ford Fiesta ST (with a Cobb tune no less!)
                </li>
                <li>
                  🚗 2020 BMW 330i (company lease)
                </li>
                <li>
                  🚗 2020 BMW 440xi (company lease, this thing was awesome)
                </li>
                <li>
                  🚗 2001 BMW M5 (Max quit his gig at BMW and immediately bought this,
                  put over 15k miles on this in a year, and loved every one until the
                  timing chain guides went POOF)
                </li>
                <li>
                  🚗 1982 Porsche 911SC (Max's current project that has the engine from a
                  '93 Porsche 964!)
                </li>
              </ul>
            </p>
          </div>
          {/* Add more content here */}
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
