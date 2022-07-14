import axios from 'axios';

enum Type {
  GET = 'GET',
  POST = 'POST',
}

export const fetchData = async (url: string, type: string, data = {}) => {
  // post request
  if (type === Type.POST) {
    const result = await axios.post(url, data, { withCredentials: true });
    return result;
  }

  // get request
  else {
    const result = await axios.get(url, { withCredentials: true });
    return result;
  }
};
