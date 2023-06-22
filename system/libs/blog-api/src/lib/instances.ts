import axios from 'axios';
import { isOkStatus } from './core';

const blogAPI = axios.create({
  withCredentials: true,
  validateStatus: isOkStatus,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { blogAPI };
