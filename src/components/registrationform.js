// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/registration/addUser', {
        email,
        password,
      });
      console.log('Registration successful:', response.data);
      // Optionally, redirect the user or show a success message
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration error
    }
  };

  return (
    <form onSubmit={handleRegistration} className="flex flex-col items-center justify-center mt-14  shadow-2xl shadow-blue-500 h-full gap-4">
      <h1 className='text-2xl text-center font-bold mb-4'>Registration</h1>
      <label>Enter Your Email</label>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <label>Enter Your Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;