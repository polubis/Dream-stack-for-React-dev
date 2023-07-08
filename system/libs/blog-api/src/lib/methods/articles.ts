import type {
  GetArticlesParams,
  GetArticleParams,
  GetArticleResponse,
  GetArticlesResponse,
} from '../../models';
import { getPath } from '../core';
import { blogAPI } from '../instances';

export const getArticles = async (
  params?: GetArticlesParams
): Promise<GetArticlesResponse> => {
  const { data } = await blogAPI.get<GetArticlesResponse>(getPath('Articles'), {
    params,
  });

  return data;
};

export const getArticle = async (
  params: GetArticleParams
): Promise<GetArticleResponse> => {
  const { data } = await blogAPI.get<GetArticleResponse>(
    getPath('Articles') + '/' + params.id
  );

  return data;
};
