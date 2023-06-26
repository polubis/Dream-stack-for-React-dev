import type {
  GetArticlesSearchParams,
  GetArticlesResponse,
} from '../../models';
import { getPath } from '../core';
import { blogAPI } from '../instances';

export const getArticles = async (
  params?: GetArticlesSearchParams
): Promise<GetArticlesResponse> => {
  const { data } = await blogAPI.get<GetArticlesResponse>(getPath('Articles'), {
    params,
  });

  return data;
};
