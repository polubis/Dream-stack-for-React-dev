import { act, waitFor } from '@testing-library/react';
import { storeFixture } from '../test-utils';
import {
  change,
  initialize,
  confirm,
  useArticleMaintainStore,
} from './article-maintain.store';
import {
  createArticle,
  getArticle,
  getError,
  updateArticle,
} from '@system/blog-api';
import {
  mockErrorResponse,
  mockGetArticleResponse,
  mockResponse,
} from '@system/blog-api-mocks';
import type { Url } from '@system/blog-api-models';

jest.mock('@system/blog-api');

describe('Allows to maintain article when: ', () => {
  const url: Url = 'some-article-url';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('the initial state have exact shape', () => {
    const { result, restore } = storeFixture(useArticleMaintainStore);

    expect(result.current.error).toBe(undefined);
    expect(result.current.url).toBe(undefined);
    expect(result.current.form).toBe(undefined);
    expect(result.current.is).toBe('idle');

    restore();
  });

  it('can be initialized if user want to create article', () => {
    const { result, restore } = storeFixture(useArticleMaintainStore);

    act(() => {
      initialize('pl');
    });

    expect(result.current.form.values.lang).toBe('pl');
    expect(result.current.form.values.title).toBe('');
    expect(result.current.form.values.description).toBe('');
    expect(result.current.form.values.thumbnail).toEqual({
      file: null,
      preview: [],
    });
    expect(result.current.form.values.content).toBe('');
    expect(result.current.is).toBe('creation');

    restore();
  });

  it('handles error if occurs', async () => {
    const response = mockErrorResponse();
    const spy = (getArticle as jest.Mock).mockRejectedValue(response);
    (getError as jest.Mock).mockImplementation(
      jest.requireActual('@system/blog-api')['getError']
    );

    const { result, restore } = storeFixture(useArticleMaintainStore);

    act(() => {
      initialize('en', url);
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({ lang: 'en', url });
    expect(result.current.is).toBe('loading');

    await waitFor(() => {
      expect(result.current.is).toBe('error');
      expect(result.current.error.key).toBe('unknown');
    });

    restore();
  });

  it('can be initialized if user want to update article', async () => {
    const response = mockGetArticleResponse();
    const spy = (getArticle as jest.Mock).mockResolvedValue(response);

    const { result, restore } = storeFixture(useArticleMaintainStore);

    act(() => {
      initialize('en', url);
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({ lang: 'en', url });
    expect(result.current.is).toBe('loading');

    await waitFor(() => {
      expect(result.current.is).toBe('edition');
      expect(result.current.url).toBe(url);
      expect(result.current.form.values.lang).toBe(response.data.lang);
      expect(result.current.form.values.title).toBe(response.data.title);
      expect(result.current.form.values.description).toBe(
        response.data.description
      );
      expect(result.current.form.values.thumbnail).toEqual({
        file: null,
        preview: [response.data.thumbnailUrl],
      });
      expect(result.current.form.values.content).toBe(response.data.content);
    });

    restore();
  });

  it('value can be changed', () => {
    const { result, restore } = storeFixture(useArticleMaintainStore);

    act(() => {
      initialize('en');
      change('title', 'test');
    });

    expect(result.current.form.values.title).toBe('test');

    restore();
  });

  it('form can be confirmed and validated', () => {
    const { result, restore } = storeFixture(useArticleMaintainStore);

    act(() => {
      initialize('en');
      confirm();
    });

    expect(result.current.form.dirty).toBe(true);
    expect(result.current.form.invalid).toBe(true);

    restore();
  });

  it('user can update an article', async () => {
    const response = mockResponse(null);
    const spy = (updateArticle as jest.Mock).mockResolvedValue(response);
    const { result, restore } = storeFixture(useArticleMaintainStore);

    act(() => {
      initialize('en', url);
      change('title', 'title');
      confirm();
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      ...result.current.form.values,
      thumbnail: result.current.form.values.thumbnail.file,
      url,
    });
    expect(result.current.is).toBe('pending');

    await waitFor(() => {
      expect(result.current.is).toBe('edited');
    });

    restore();
  });

  it('user can create an article', async () => {
    const response = mockResponse(null);
    const spy = (createArticle as jest.Mock).mockResolvedValue(response);
    const { result, restore } = storeFixture(useArticleMaintainStore);

    act(() => {
      initialize('en');
      change('title', 'title');
      confirm();
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      ...result.current.form.values,
      thumbnail: result.current.form.values.thumbnail.file,
    });
    expect(result.current.is).toBe('pending');

    await waitFor(() => {
      expect(result.current.is).toBe('created');
    });

    restore();
  });
});
