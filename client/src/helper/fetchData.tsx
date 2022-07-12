import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EnumType } from 'typescript';

type Data = {
  data: {};
};

enum Type {
  GET,
  POST,
}

export const fetchData = (url: string, data: Data, type: Type) => {
  // post request
  if (type === Type.POST) {
    const result = axios.post(url, data);
    return result;
  }

  // get request
  else {
    const result = axios.get(url);
    return result;
  }
};
