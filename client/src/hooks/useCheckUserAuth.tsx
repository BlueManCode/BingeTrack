import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchData } from '../helper/fetchData';
import apiEndpoints from '../apiEndpoints.json';

export const useCheckUserAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const authRoutes = ['/login', '/signup'];
  const privateRoutes = ['/'];

  const handleAuthCheck = async () => {
    // user on one of the auth routes
    if (authRoutes.includes(location.pathname)) {
      const res = await fetchData(apiEndpoints.AUTH_CHECK, 'GET');
      // auth validated, send to dashboard
      if (res.status === 200) navigate('/');
    }

    // user on one of the private routes
    else if (privateRoutes.includes(location.pathname)) {
      const res = await fetchData(apiEndpoints.AUTH_CHECK, 'GET');
      // auth not validated, send back to login page
      if (res.status !== 200) navigate('/login');
    }
  };

  useEffect(() => {
    handleAuthCheck();
  }, [location.pathname]);
};
