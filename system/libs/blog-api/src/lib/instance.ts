import axios from 'axios';

declare const process: {
  env: {
    NEXT_PUBLIC_API_URL?: string;
  };
};

const getAPIUrl = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;

  if (url === undefined) {
    throw Error('Lack of process.env.NEXT_PUBLIC_API_URL');
  }

  return url;
};

const {
  get,
  post: pst,
  put,
  patch: pch,
  delete: del,
} = axios.create({
  baseURL: getAPIUrl(),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { get, pst, put, pch, del };
