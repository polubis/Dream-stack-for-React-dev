import { envFixture } from '@system/utils';
import type { BlogEnv } from '../../models';

const blogEnvFixture = envFixture<BlogEnv>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterEach: () => {},
})({
  NEXT_PUBLIC_API_URL: 'https://localhost:9009/api/',
});

export { blogEnvFixture };
