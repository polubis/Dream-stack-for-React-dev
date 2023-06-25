import axios from 'axios';
import { getUrl, isOkStatus } from '../core';

const blogAPI = axios.create({
  baseURL: getUrl(),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: isOkStatus,
});

export { blogAPI };
