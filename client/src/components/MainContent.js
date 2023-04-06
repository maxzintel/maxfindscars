// MainContent.js
import React from 'react';
import SubscriptionForm from './SignupForm';
import RecentPosts from './RecentPosts';
import Header from './Header';
import Footer from './Footer';

const MainContent = ({ posts }) => {
  return (
    <main>
      <Header />
      <div className="container border-black p-5 m-2 mt-0">
        <h1 className="left-0 font-bold text-3xl">
          THE MOST INTERESTING CARS ON THE INTERNET IN YOUR INBOX
        </h1>
        <h2 className="text-lg left-0 font-bold mt-3">
          Join our gaggle of car lovers and get a MWF newsletter showing off the most interesting cars for sale online and telling their stories!
        </h2>
        <p className="text-base mt-3 left-0">
          ✍️ WRITTEN BY MAX WHO ONCE WIRED HIS BRAKES TO HIS FRONT TURN SIGNALS AND DID NOT NOTICE FOR A WHOLE 30 MILES.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around w-full">
        <div className="m-5 bg-antiquewhite w-full md:w-1/2 h-72 flex items-center justify-center">
          <SubscriptionForm />
        </div>
        <div className="m-5 bg-antiquewhite w-full md:w-1/2 h-72 flex flex-col items-center justify-center">
          <p className="text-base mb-4 mt-4 font-bold">
            📚 READ BY EXECUTIVES OF MANY REPUTABLE COMPANIES*
          </p>
          <div className="grid grid-cols-3 ml-5 mr-5 p-4">
            <img className="h-16 w-auto object-contain mb-4" src="./logos/Theranos-Logo.png"/>
            <img className="h-16 w-auto object-contain mb-4" src="./logos/Wells_Fargo_Bank.svg.png"/>
            <img className="h-16 w-auto object-contain mb-4" src="./logos/FTX_logo.svg.png"/>
            <img className="h-16 w-auto object-contain mb-4" src="./logos/Kmart_logo.svg.png"/>
            <img className="h-16 w-auto object-contain mb-4" src="./logos/Logo_de_Enron.svg.png"/>
            <img className="h-16 w-auto object-contain mb-4" src="./logos/swingerooBlackerandBEtter.png"/>
          </div>
          <p className="mb-4 mt-4 text-sm">
            *this is a joke don't sue me pls
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-center text-3xl font-bold mb-5">🤔 STILL NOT CONVINCED?</h2>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="md:w-1/2 p-5">
            <h3 className="text-xl font-bold mb-3 text-center">WHAT YOU GET WHEN YOU SIGN UP:</h3>
            <ul className="list-disc list-outside ml-5">
              <li className="mb-2">🗓️ A Monday, Wednesday, Friday newsletter that (usually) takes 5 minutes to read unless Max gets really carried away.</li>
              <li className="mb-2">🚕 The most interesting, strange, cool, or downright WILD vehicles for sale online, hand delivered to your electronic mail inbox by Max himself.</li>
              <li className="mb-2">💗 A place in Max's heart (he will love you if you read his emails).</li>
              <li className="mb-2">💯 The knowledge that any advertising money Max earns from this website will probably go directly to buying car parts.</li>
            </ul>
          </div>
          <div className="md:w-1/2 p-5">
            <RecentPosts posts={posts} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default MainContent;