import React from 'react';
import SideBarMenuOptions from './SideBarMenuOptions';

const SideBar = () => {
  return (
    <div className='h-screen w-80 bg-neutral-900 text-neutral-200'>
      <div className='p-10 text-3xl font-extrabold'>Binge Clock</div>
      <SideBarMenuOptions />
    </div>
  );
};

export default SideBar;
