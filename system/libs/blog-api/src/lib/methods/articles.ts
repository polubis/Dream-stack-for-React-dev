import { getPath } from '../core';
import {
  GetArticlesParams,
  GetArticlesResponse,
  GetArticleParams,
  GetArticleResponse,
  CreateArticlePayload,
  CreateArticleResponse,
  UpdateArticlePayload,
  UpdateArticleResponse,
  DeleteArticlePayload,
  DeleteArticleResponse,
  AcceptArticlePayload,
  AcceptArticleResponse,
  RejectArticlePayload,
  RejectArticleResponse,
  SendForApprovalArticlePayload,
  SendForApprovalArticleResponse,
} from '@system/blog-api-models';
import { blogAPI } from '../instances';
import { formData } from '../core/form-data';

const getArticles = async ({
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

const getArticle = async (
  params: GetArticleParams
): Promise<GetArticleResponse> => {
  const { data } = await blogAPI.get<GetArticleResponse>(
    [getPath('Articles'), params.lang, params.url].join('/')
  );

  return data;
};

const createArticle = async (
  payload: CreateArticlePayload
): Promise<CreateArticleResponse> => {
  const { data } = await blogAPI.post<CreateArticleResponse>(
    getPath('Articles'),
    formData(payload),
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return data;
};

const updateArticle = async ({
  url,
  ...payload
}: UpdateArticlePayload): Promise<UpdateArticleResponse> => {
  const { data } = await blogAPI.put<UpdateArticleResponse>(
    [getPath('Articles'), payload.lang, url].join('/'),
    formData(payload),
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return data;
};

const deleteArticle = async ({
  id,
}: DeleteArticlePayload): Promise<DeleteArticleResponse> => {
  const { data } = await blogAPI.delete<DeleteArticleResponse>(
    [getPath('Articles'), id].join('/')
  );

  return data;
};

const acceptArticle = async ({
  id,
}: AcceptArticlePayload): Promise<AcceptArticleResponse> => {
  const { data } = await blogAPI.post<AcceptArticleResponse>(
    [getPath('Articles/Accept'), id].join('/')
  );

  return data;
};

const rejectArticle = async ({
  id,
}: RejectArticlePayload): Promise<RejectArticleResponse> => {
  const { data } = await blogAPI.post<RejectArticleResponse>(
    [getPath('Articles/Reject'), id].join('/')
  );

  return data;
};

const sendForApprovalArticle = async ({
  id,
}: SendForApprovalArticlePayload): Promise<SendForApprovalArticleResponse> => {
  const { data } = await blogAPI.post<SendForApprovalArticleResponse>(
    [getPath('Articles/SendForApproval'), id].join('/')
  );

  return data;
};

export {
  getArticle,
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
  acceptArticle,
  rejectArticle,
  sendForApprovalArticle,
};
