import { useState } from 'react';
import { fetchData } from '../../helper/fetchData';
import apiEndPoints from '../../apiEndpoints.json';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username === '' || password === '') return;
    const result = await fetchData(apiEndPoints.LOGIN, 'POST', { username, password });
    if (result.status === 200) navigate('/', { replace: true });
  };

  return (
    <div className='bg-neutral-800 text-white font-sans h-screen flex items-center justify-center'>
      <div className='bg-neutral-900 bg-opacity-80 w-96 p-10 rounded-md shadow-md resize-none'>
        <div className='text-center text-2xl font-extrabold pb-2'>Welcome back!</div>
        <div className='text-center text-neutral-400 font-lg pb-6'>We're excited to see you back!</div>
        <div className='pb-6'>
          <div className='text-lg text-neutral-400 font-lg'>Username</div>
          <input
            className='bg-black rounded-md p-3 w-full'
            type='text'
            onChange={(e) => {
              setusername(e.target.value);
            }}></input>
        </div>
        <div className='pb-6'>
          <div className='text-lg text-neutral-400 font-lg'>Password</div>
          <input
            className='w-100 bg-black rounded-md p-3 w-full'
            type='password'
            autoComplete='true'
            onChange={(e) => {
              setpassword(e.target.value);
            }}></input>
        </div>
        <button className='bg-neutral-700 p-2 rounded-md w-full font-semibold' onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
