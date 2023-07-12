import { getPath } from '../core';
import {
  GetArticlesSearchParams,
  GetArticlesResponse,
} from '@system/blog-api-models';
import { blogAPI } from '../instances';

export const getArticles = async (
  params?: GetArticlesSearchParams
): Promise<GetArticlesResponse> => {
  const { data } = await blogAPI.get<GetArticlesResponse>(getPath('Articles'), {
    params,
  });

  return data;
};
