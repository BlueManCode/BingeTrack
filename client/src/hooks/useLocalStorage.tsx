import { useState } from 'react';

enum Type {
  SET,
  GET,
}

export const useLocalStorage = (key: string, value: string, type: Type) => {
  const [result, setresult] = useState({});
  // set items
  if (type === Type.SET) localStorage.setItem(key, value);
  // getItem
  else setresult(localStorage.getItem);

  return result;
};
