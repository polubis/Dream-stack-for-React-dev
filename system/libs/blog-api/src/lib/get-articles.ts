import type {
  GetArticlesSearchParams,
  GetArticlesResponse,
} from '@system/blog-api-models';
import { http } from './source';

const getArticles = http<GetArticlesResponse, GetArticlesSearchParams>({
  url: '/api/Articles',
});

export { getArticles };
