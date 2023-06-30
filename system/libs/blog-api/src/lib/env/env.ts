import { env } from '@system/utils';

const blogEnv = env({
  NEXT_PUBLIC_API_URL: () => process.env['NEXT_PUBLIC_API_URL'],
});

export { blogEnv };
