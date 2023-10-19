import type { AxiosRequestConfig } from 'axios';
import { getPath } from '../core';
import { blogAPI } from '../instances';
import {
  mockGetArticleParams,
  mockGetArticleResponse,
  mockGetArticlesParams,
  mockCreateArticlePayload,
  mockGetArticlesResponse,
  mockResponse,
  mockAxiosResponse,
  mockUpdateArticlePayload,
  mockParametrized,
} from '@system/blog-api-mocks';
import {
  acceptArticle,
  createArticle,
  deleteArticle,
  getArticle,
  getArticles,
  rejectArticle,
  sendArticleForApproval,
  updateArticle,
} from './articles';
import { formData } from '../core/form-data';

jest.mock('../instances');
jest.mock('../core/form-data');

describe('Articles methods works when: ', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('get articles endpoint can be called with params', async () => {
    const expectedResponse = mockGetArticlesResponse();
    const spy = jest.fn().mockResolvedValue(expectedResponse);

    jest.spyOn(blogAPI, 'get').mockImplementation(spy);
    const params = mockGetArticlesParams();

    const response = await getArticles(params);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(response).toEqual(expectedResponse.data);

    expect(spy).toHaveBeenCalledWith(
      getPath('Articles') +
        '/' +
        params.lang +
        '?CurrentPage=1&ItemsPerPage=15&Search=react&Status=Accepted'
    );
  });

  it('get article endpoint can be called with params', async () => {
    const expectedResponse = mockGetArticleResponse();
    const spy = jest.fn().mockResolvedValue(expectedResponse);

    jest.spyOn(blogAPI, 'get').mockImplementation(spy);

    const params = mockGetArticleParams();
    const response = await getArticle(params);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(response).toEqual(expectedResponse.data);
    expect(spy).toHaveBeenCalledWith(
      [getPath('Articles'), params.lang, params.url].join('/')
    );
  });

  it('article can be created', async () => {
    const expectedResponse = mockAxiosResponse(mockResponse(null)())();
    const spy = jest.spyOn(blogAPI, 'post').mockResolvedValue(expectedResponse);

    (formData as jest.Mock).mockImplementation((payload) => payload);

    const payload = mockCreateArticlePayload();
    const response = await createArticle(payload);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(getPath('Articles'), payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    } as AxiosRequestConfig);
    expect(response).toEqual(expectedResponse.data);
  });

  it('article can be updated', async () => {
    (formData as jest.Mock).mockImplementation((payload) => payload);
    const expectedResponse = mockAxiosResponse(mockResponse(null)())();
    const spy = jest.spyOn(blogAPI, 'put').mockResolvedValue(expectedResponse);

    const payload = mockUpdateArticlePayload();
    const { url, ...payloadWithoutUrl } = payload;
    const response = await updateArticle(payload);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      [getPath('Articles'), payload.lang, url].join('/'),
      payloadWithoutUrl,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      } as AxiosRequestConfig
    );
    expect(response).toEqual(expectedResponse.data);
  });

  it('article can be deleted', async () => {
    const expectedResponse = mockAxiosResponse(mockResponse(null)())();
    const spy = jest
      .spyOn(blogAPI, 'delete')
      .mockResolvedValue(expectedResponse);

    const payload = mockParametrized();
    const response = await deleteArticle(payload);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      [getPath('Articles'), payload.id].join('/')
    );
    expect(response).toEqual(expectedResponse.data);
  });

  it('article can be accepted', async () => {
    const expectedResponse = mockAxiosResponse(mockResponse(null)())();
    const spy = jest
      .spyOn(blogAPI, 'patch')
      .mockResolvedValue(expectedResponse);

    const payload = mockParametrized();
    const response = await acceptArticle(payload);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      [getPath('Articles/Accept'), payload.id].join('/')
    );
    expect(response).toEqual(expectedResponse.data);
  });

  it('article can be rejected', async () => {
    const expectedResponse = mockAxiosResponse(mockResponse(null)())();
    const spy = jest
      .spyOn(blogAPI, 'patch')
      .mockResolvedValue(expectedResponse);

    const payload = mockParametrized();
    const response = await rejectArticle(payload);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      [getPath('Articles/Reject'), payload.id].join('/')
    );
    expect(response).toEqual(expectedResponse.data);
  });

  it('article can be send for approval', async () => {
    const expectedResponse = mockAxiosResponse(mockResponse(null)())();
    const spy = jest
      .spyOn(blogAPI, 'patch')
      .mockResolvedValue(expectedResponse);

    const payload = mockParametrized();
    const response = await sendArticleForApproval(payload);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      [getPath('Articles/SendForApproval'), payload.id].join('/')
    );
    expect(response).toEqual(expectedResponse.data);
  });
});
