import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useCheckUserAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`path changed to ${location.pathname}`);
  }, [location.pathname]);
};
