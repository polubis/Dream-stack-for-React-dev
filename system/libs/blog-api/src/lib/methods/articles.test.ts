import type { AxiosRequestConfig } from 'axios';
import { getPath } from '../core';
import { blogAPI } from '../instances';
import {
  mockGetArticleParams,
  mockGetArticleResponse,
  mockGetArticlesParams,
  mockGetArticlesResponse,
} from '@system/blog-api-mocks';
import { getArticle, getArticles } from './articles';

jest.mock('../instances');

describe('Articles methods works when: ', () => {
  it('get articles endpoint can be called with params', async () => {
    const expectedResponse = mockGetArticlesResponse();
    const getSpy = jest.fn().mockResolvedValue(expectedResponse);

    jest.spyOn(blogAPI, 'get').mockImplementationOnce(getSpy);
    const params = mockGetArticlesParams();
    const { lang, ...expectedParams } = params;

    const response = await getArticles(params);

    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(response).toEqual(expectedResponse.data);

    expect(getSpy).toHaveBeenCalledWith(getPath('Articles') + '/' + lang, {
      params: expectedParams,
    } as Partial<AxiosRequestConfig>);
  });

  it('get article endpoint can be called with params', async () => {
    const expectedResponse = mockGetArticleResponse();
    const getSpy = jest.fn().mockResolvedValue(expectedResponse);

    jest.spyOn(blogAPI, 'get').mockImplementationOnce(getSpy);

    const params = mockGetArticleParams();
    const response = await getArticle(params);

    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(response).toEqual(expectedResponse.data);
    expect(getSpy).toHaveBeenCalledWith(
      [getPath('Articles'), params.lang, params.url].join('/')
    );
  });
});
