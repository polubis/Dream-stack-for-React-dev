import type { PartialEnvironment } from '@system/utils';

type BlogEnv = PartialEnvironment<{
  NEXT_PUBLIC_API_URL: string;
}>;

export type { BlogEnv };
