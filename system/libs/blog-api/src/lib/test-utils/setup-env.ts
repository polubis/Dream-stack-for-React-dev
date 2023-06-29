import { envFixture } from '@system/utils';
import type { BlogEnv } from '../../models';

const blogEnvFixture = envFixture<BlogEnv>({
  NEXT_PUBLIC_API_URL: 'https://localhost:9009/api/',
});

export { blogEnvFixture };
