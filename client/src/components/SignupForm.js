// SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('🏁Join to get our 5 min newsletter showcasing the most interesting cars for sale online.');
  const [isLoading, setIsLoading] = useState(false); // Add this line

  const submitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set isLoading to true before making the request

    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/signup`, { email }, { headers: { 'Content-Type': 'application/json' } });
      setMessage('✅ Success! Look for a welcome email soon!');
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({'event': 'signup_success'});
      window.dataLayer.push({'event': 'ads_conversion_Sign_up_1'})
      gtag('event', 'sign_up', {
        date: new Date().toISOString()
      });
    } catch (error) {
      setMessage('❌ FAILED. Check for typos and try again!');
    } finally {
      setIsLoading(false); // Set isLoading back to false after the request has completed
    }
  };

  return (
    <>
      <form className="font-bold flex flex-col items-center px-4 w-full" onSubmit={submitForm}>
        {message && <div className='p-3 mb-1 w-full md:w-3/4'>{message}</div>}
        {isLoading ? (
          <img src={`${process.env.PUBLIC_URL}/logos/13.gif`} alt="Loading..." className="mb-3" />
        ) : (
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address..."
            className="p-3 border mb-3 text-lg w-full md:w-3/4"
          />
        )}
        <input type="submit" value="SUBSCRIBE" className="p-3 outline-2 border-black border-2 bg-yellow cursor-pointer" />
      </form>
    </>
  );
};

export default SignupForm;
