import type {
  GetArticlesSearchParams,
  GetArticlesResponse,
  CreateArticleResponse,
  CreateArticlePayload,
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

export const createArticle = async (
  payload: CreateArticlePayload
): Promise<CreateArticleResponse> => {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const { data } = await blogAPI.post<CreateArticleResponse>(
    getPath('Articles'),
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return data;
};
