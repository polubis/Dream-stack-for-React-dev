import { getPath } from '../core';
import {
  GetArticlesParams,
  GetArticlesResponse,
  GetArticleParams,
  GetArticleResponse,
} from '@system/blog-api-models';
import { blogAPI } from '../instances';

export const getArticles = async ({
  lang,
  ...params
}: GetArticlesParams): Promise<GetArticlesResponse> => {
  const { data } = await blogAPI.get<GetArticlesResponse>(
    getPath('Articles') + '/' + lang,
    {
      params,
    }
  );

  return data;
};

export const getArticle = async (
  params: GetArticleParams
): Promise<GetArticleResponse> => {
  const { data } = await blogAPI.get<GetArticleResponse>(
    [getPath('Articles'), params.lang, params.url].join('/')
  );

  return data;
};
