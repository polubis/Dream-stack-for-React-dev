import { act, waitFor } from '@testing-library/react';
import { storeFixture } from '../test-utils';
import type { RecommendedArticlesStateKey } from './defs';
import {
  getError,
  mockResponseError,
  getArticles,
  type GetArticlesResponse,
  type GetArticlesSearchParams,
} from '@system/blog-api';
import { useRecommendedArticlesStore } from './recommended-articles.store';

jest.mock('@system/blog-api');

describe('Allows to sign in user when: ', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('success state transition is handled', async () => {
    const { result, restore } = storeFixture(useRecommendedArticlesStore);

    (getArticles as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: [] } as GetArticlesResponse)
    );

    expect(result.current.key).toBe('idle' as RecommendedArticlesStateKey);

    act(() => {
      result.current.load();
    });

    expect(result.current.key).toBe('pending' as RecommendedArticlesStateKey);

    await waitFor(() => {
      expect(getArticles).toHaveBeenCalledTimes(1);
      expect(getArticles).toHaveBeenCalledWith({
        ItemsPerPage: 16,
      } as GetArticlesSearchParams);
    });

    expect(result.current.key).toBe('ok' as RecommendedArticlesStateKey);

    restore();
  });

  it('error state transition is handled', async () => {
    const { result, restore } = storeFixture(useRecommendedArticlesStore);

    (getArticles as jest.Mock).mockImplementation(() => Promise.reject());
    (getError as jest.Mock).mockImplementation(
      jest.requireActual('@system/blog-api')['getError']
    );
    (mockResponseError as jest.Mock).mockImplementation(
      jest.requireActual('@system/blog-api')['mockResponseError']
    );

    expect(result.current.key).toBe('idle' as RecommendedArticlesStateKey);

    act(() => {
      result.current.load();
    });

    expect(result.current.key).toBe('pending' as RecommendedArticlesStateKey);

    await waitFor(() => {
      expect(getArticles).toHaveBeenCalledTimes(1);
    });

    expect(result.current.key).toBe('error' as RecommendedArticlesStateKey);
    expect(result.current.error).toEqual(mockResponseError());

    restore();
  });
});
