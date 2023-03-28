// SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/signup', { email });
      setMessage('Success! Feel free to press the back button and subscribe all your friends 😊');
    } catch (error) {
      setMessage('FAILED. PRESS THE BACK BUTTON AND FIX THE TYPO PUNK.');
    }
  };

  return (
    <>
      <form className="font-bold flex flex-col items-center px-4 w-full" onSubmit={submitForm}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address..."
          class="p-3 border mb-3 text-lg w-full md:w-3/4"
        />
        <input type="submit" value="SUBSCRIBE" className="p-3 outline-2 border-black border-2 bg-yellow" />
      </form>
      {message && <div>{message}</div>}
    </>
  );
};

export default SignupForm;
