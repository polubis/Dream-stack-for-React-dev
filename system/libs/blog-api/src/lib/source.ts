import { source } from '@system/utils';

declare const process: {
  env: {
    API_URL?: string;
  };
};

const { http } = source({
  url: process.env.API_URL,
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { http };
