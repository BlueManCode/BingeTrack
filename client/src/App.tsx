import { Routes, Route } from 'react-router-dom';
import { useCheckUserAuth } from './hooks/useCheckUserAuth';

// Public Pages
import LoginPage from './pages/Public/LoginPage';
import HandleLogin from './pages/Public/HandleLogin';

// Private Pages
import DashBoardPage from './pages/Private/DashBoardPage';
import DiscoverPage from './pages/Private/DiscoverPage';
import FriendsPage from './pages/Private/FriendsPage';
import MyListPage from './pages/Private/MyListPage';
import ReportPage from './pages/Private/ReportPage';

const App = () => {
  useCheckUserAuth();

  return (
    <div className='bg-neutral-800 text-white font-sans h-screen m-0 p-0'>
      <Routes>
        <Route path='/' element={<DashBoardPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/oauth/discord' element={<HandleLogin />}></Route>
        <Route path='/discover' element={<DiscoverPage />}></Route>
        <Route path='/friends' element={<FriendsPage />}></Route>
        <Route path='/list' element={<MyListPage />}></Route>
        <Route path='/report' element={<ReportPage />}></Route>
        <Route path='*' element={<div>Page Not Found</div>}></Route>
      </Routes>
    </div>
  );
};

export default App;
