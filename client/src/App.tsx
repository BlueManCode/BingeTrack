import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useCheckUserAuth } from './hooks/useCheckUserAuth';

// Public Pages
import LoginPage from './pages/Public/LoginPage';
import SignUpPage from './pages/Public/SignUpPage';

// Private Pages
import DashBoardPage from './pages/Private/DashBoardPage';

const App = () => {
  // useCheckUserAuth();

  return (
    <Routes>
      <Route path='/' element={<DashBoardPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/signup' element={<SignUpPage />}></Route>
    </Routes>
  );
};

export default App;
