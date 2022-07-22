import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../../helper/fetchData';
import apiEndPoints from '../../apiEndpoints.json';

const HandleLogin = () => {
  const navigate = useNavigate();

  const authenicateUserToken = async (token: string) => {
    const result = await fetchData(apiEndPoints.LOGIN_DISCORD, 'POST', { token });
    if (result.status === 200) navigate('/');
    else navigate('/login');
  };

  useEffect(() => {
    const urlParams = new window.URLSearchParams(window.location.hash);
    const token = urlParams.get('access_token');

    // if the code does not exist, send back to login page.
    // else send for authentication
    if (token === null || token === '') navigate('/login');
    else authenicateUserToken(token);
  });

  return <div>Handling Login...</div>;
};

export default HandleLogin;
