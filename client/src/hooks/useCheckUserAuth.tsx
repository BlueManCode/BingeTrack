import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchData } from '../helper/fetchData';
import apiEndpoints from '../apiEndpoints.json';

export const useCheckUserAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const authRoutes = ['/login'];
  const privateRoutes = ['/'];
  const publicRoutes = [];

  const handleAuthCheck = async () => {
    const res = await fetchData(apiEndpoints.AUTH_CHECK, 'GET');

    // user on one of the auth routes
    if (authRoutes.includes(location.pathname)) {
      // auth validated, send to dashboard
      if (res.status === 200) navigate('/');
      return;
    }

    // user on one of the private routes
    if (privateRoutes.includes(location.pathname)) {
      // auth not validated, send back to login page
      if (res.status !== 200) navigate('/login');
      return;
    }
  };

  useEffect(() => {
    handleAuthCheck();
  }, [location.pathname]);
};
