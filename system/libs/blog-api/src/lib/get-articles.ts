import type {
  GetArticlesResponse,
  GetArticlesPayload,
} from '@system/blog-api-models';
import { url } from './url';

export const getArticles = async (
  payload: GetArticlesPayload = {}
): Promise<GetArticlesResponse> => {
  const response = await fetch(url('/api/Articles'));

  const json = await response.json();

  return json;
};
