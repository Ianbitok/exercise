// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/registration/loginUser/20', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      // Optionally, redirect the user or update app state
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col items-center justify-center mt-10  shadow-2xl shadow-blue-500 h-96 gap-4">
      <h1 className='text-2xl text-center font-bold mb-4'>Sign In</h1>
      <label>Enter  Your Email</label>
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
        Login
      </button>
    </form>
  );
};

export default LoginForm;