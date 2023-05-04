// SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add this line

  const submitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set isLoading to true before making the request

    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/signup`, { email }, { headers: { 'Content-Type': 'application/json' } });
      setMessage('✅ Success! Thanks for your support!');
    } catch (error) {
      setMessage('FAILED. FIX THE TYPO PUNK.');
    } finally {
      setIsLoading(false); // Set isLoading back to false after the request has completed
    }
  };

  return (
    <>
      <form className="font-bold flex flex-col items-center px-4 w-full" onSubmit={submitForm}>
        {message && <div className='mb-2'>{message}</div>}
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
