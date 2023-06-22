import type {
  GetArticlesResponse,
  GetArticlesSearchParams,
} from '../../models';
import { getPath } from '../core';
import { blogAPI } from '../instances';
import { mockOkPaginatedResponse } from '../test-utils';
import { getArticles } from './articles';

jest.mock('../instances');

describe('Articles methods works when: ', () => {
  it('get articles endpoint is called with payload', async () => {
    const getSpy = jest.fn().mockResolvedValue(
      mockOkPaginatedResponse({
        data: [],
      }) as GetArticlesResponse
    );

    jest.spyOn(blogAPI, 'get').mockImplementationOnce(getSpy);

    const articles = await getArticles({
      Search: 'react',
      CurrentPage: 1,
      ItemsPerPage: 15,
    });

    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(articles).toEqual([]);
    expect(getSpy).toHaveBeenCalledWith(getPath('Articles'), {
      params: {
        CurrentPage: 1,
        ItemsPerPage: 15,
        Search: 'react',
      } as GetArticlesSearchParams,
    });
  });
});
