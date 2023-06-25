import type { AxiosRequestConfig } from 'axios';
import { getPath } from '../core';
import { blogAPI } from '../instances';
import {
  mockGetArticlesSearchParams,
  mockOkGetArticlesResponse,
} from '../test-utils';
import { getArticles } from './articles';

jest.mock('../instances');

describe('Articles methods works when: ', () => {
  it('get articles endpoint can be called with params', async () => {
    const expectedResponse = mockOkGetArticlesResponse();
    const getSpy = jest.fn().mockResolvedValue(expectedResponse);

    jest.spyOn(blogAPI, 'get').mockImplementationOnce(getSpy);
    const params = mockGetArticlesSearchParams();

    const response = await getArticles(params);

    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(response).toEqual(expectedResponse.data);
    expect(getSpy).toHaveBeenCalledWith(getPath('Articles'), {
      params,
    } as Partial<AxiosRequestConfig>);
  });
});
