import axios from 'axios';

enum Type {
  GET = 'get',
  POST = 'post',
}

export const fetchData = async (url: string, type: string, data = {}): Promise<any> => {
  // post request
  if (type.toLowerCase() === Type.POST) {
    const result = await axios.post(url, data, { withCredentials: true });
    return result;
  }

  // get request
  else {
    const result = await axios.get(url, { withCredentials: true });
    return result;
  }
};
