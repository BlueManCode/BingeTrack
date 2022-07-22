import DiscordLogin from '../../components/DiscordLogin';

const LoginPage = () => {
  return (
    <div className='bg-neutral-800 text-white font-sans h-screen flex items-center justify-center'>
      <div className='bg-neutral-900 bg-opacity-80 w-96 p-10 rounded-md shadow-md resize-none'>
        <div className='text-center text-2xl font-extrabold pb-2'>Welcome back!</div>
        <div className='text-center text-neutral-400 font-lg pb-6'>We're excited to see you back!</div>
        <DiscordLogin />
      </div>
    </div>
  );
};

export default LoginPage;
