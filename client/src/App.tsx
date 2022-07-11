import { Routes, Route } from 'react-router-dom';
import { useCheckUserAuth } from './hooks/useCheckUserAuth';

// Public Pages
import LoginPage from './pages/Public/LoginPage';
import SignUpPage from './pages/Public/SignUpPage';

// Private Pages
import DashBoardPage from './pages/Private/DashBoardPage';

const App = () => {
  useCheckUserAuth();

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/signup' element={<SignUpPage />}></Route>
      <Route path='/' element={<DashBoardPage />}></Route>
    </Routes>
  );
};

export default App;
