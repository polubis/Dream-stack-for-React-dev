import type { GetArticlesResponse, GetArticlesSearchParams } from '../models';
import { get } from './instance';

export const getArticles = async (
  params?: GetArticlesSearchParams
): Promise<GetArticlesResponse> => {
  const { data } = await get<GetArticlesResponse>('Articles', { params });

  return data;
};
