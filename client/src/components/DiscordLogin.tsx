import React from 'react';
import { SiDiscord } from 'react-icons/si';

const DiscordLogin = () => {
  const handleLogin = () => {
    const oauthURL = `https://discord.com/api/oauth2/authorize?response_type=token&client_id=999350808908931203&scope=email&identify`;
    window.location.href = oauthURL;
  };

  return (
    <div className='bg-neutral-700 p-2 rounded-md w-full font-semibold flex justify-center hover:bg-neutral-800 cursor-pointer' onClick={handleLogin}>
      <SiDiscord style={{ margin: 'auto 0 auto 0' }} size='20' />
      <span className='font-bold px-5'>Discord Login</span>
    </div>
  );
};

export default DiscordLogin;
