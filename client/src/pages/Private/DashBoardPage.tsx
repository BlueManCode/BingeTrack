import React, { useEffect } from 'react';

const DashBoardPage = () => {
  useEffect(() => {
    console.log('dashboard rendered');
  }, []);

  return (
    <>
      <div>DashBoard</div>
    </>
  );
};

export default DashBoardPage;
