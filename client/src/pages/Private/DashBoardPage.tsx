import React, { useEffect } from 'react';
import SideBar from '../../components/SideBar';

const DashBoardPage = () => {
  useEffect(() => {
    console.log('dashboard rendered');
  }, []);

  return (
    <>
      <SideBar />
    </>
  );
};

export default DashBoardPage;
