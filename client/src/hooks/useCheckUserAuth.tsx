import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useCheckUserAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    'path changed';
  }, [location.pathname]);

  console.log('working');
};
