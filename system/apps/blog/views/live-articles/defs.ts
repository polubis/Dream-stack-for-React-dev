import type {
  GetArticlesParams,
  GetArticlesResponse,
} from '@system/blog-api-models';

interface LiveArticlesViewProps {
  response: GetArticlesResponse;
  params: GetArticlesParams;
}

export type { LiveArticlesViewProps };
