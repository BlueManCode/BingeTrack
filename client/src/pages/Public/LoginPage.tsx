import { useState } from 'react';
import { fetchData } from '../../helper/fetchData';
import apiEndPoints from '../../apiEndpoints.json';
import { useNavigate } from 'react-router-dom';
import googleapi from 'googleapis';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {};

  return (
    <div className='bg-neutral-800 text-white font-sans h-screen flex items-center justify-center'>
      <div className='bg-neutral-900 bg-opacity-80 w-96 p-10 rounded-md shadow-md resize-none'>
        <div className='text-center text-2xl font-extrabold pb-2'>Welcome back!</div>
        <div className='text-center text-neutral-400 font-lg pb-6'>We're excited to see you back!</div>
        <button className='bg-neutral-700 p-2 rounded-md w-full font-semibold' onClick={handleLogin}>
          Google Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
