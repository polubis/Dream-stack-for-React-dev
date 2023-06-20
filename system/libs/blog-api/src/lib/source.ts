import { source } from '@system/utils';

declare const process: {
  env: {
    NEXT_PUBLIC_API_URL?: string;
  };
};

const { get, pch, put, pst, del, intercept } = source({
  url: process.env.NEXT_PUBLIC_API_URL as string,
});

export { get, pch, put, pst, del, intercept };
