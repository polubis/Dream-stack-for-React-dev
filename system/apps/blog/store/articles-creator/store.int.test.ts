import { getPath, requestFixture } from '@system/blog-api';
import { storeFixture } from '../test-utils';
import { useArticlesCreatorStore } from './store';
import { act, waitFor } from '@testing-library/react';
import { articles_creator_actions } from './actions';
import {
  mockErrorResponse,
  mockGetArticleResponse,
} from '@system/blog-api-mocks';
import type { ArticlesCreator } from './defs';
import type { Lang, Url } from '@system/blog-api-models';

describe('Articles creation feature works when: ', () => {
  const url: Url = 'some-url';
  const lang: Lang = 'en';

  const { clean, server, rest } = requestFixture();

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    clean();
  });

  afterAll(() => {
    server.close();
  });

  it('allows to update loaded article', async () => {
    const article = mockGetArticleResponse();
    server.use(
      rest.get([getPath('Articles'), lang, url].join('/'), (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(article));
      })
    );
    server.use(
      rest.put([getPath('Articles'), lang, url].join('/'), (_, res, ctx) => {
        return res(ctx.status(200));
      })
    );

    const { result, restore } = storeFixture(useArticlesCreatorStore);

    act(() => {
      articles_creator_actions.init(lang, url);
    });

    await waitFor(() => {
      expect(result.current.is).toBe('edition');
      expect(result.current).toMatchSnapshot();
    });

    act(() => {
      articles_creator_actions.change('thumbnail', {
        file: {} as File,
        preview: [article.data.thumbnailUrl],
      });
    });

    await waitFor(() => {
      expect(result.current.is).toBe('edition');
      expect(result.current).toMatchSnapshot();
    });

    act(() => {
      articles_creator_actions.confirm();
    });

    expect(result.current.is).toBe('editing');

    await waitFor(() => {
      expect(result.current.is).toBe('edited');
      expect(result.current).toMatchSnapshot();
    });

    restore();
  });

  it('handles error if article update fail', async () => {
    const article = mockGetArticleResponse();
    server.use(
      rest.get([getPath('Articles'), lang, url].join('/'), (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(article));
      })
    );
    server.use(
      rest.put([getPath('Articles'), lang, url].join('/'), (_, res, ctx) => {
        return res(ctx.status(400), ctx.json(mockErrorResponse()));
      })
    );

    const { result, restore } = storeFixture(useArticlesCreatorStore);

    act(() => {
      articles_creator_actions.init(lang, url);
    });

    await waitFor(() => {
      expect(result.current.is).toBe('edition');
      expect(result.current).toMatchSnapshot();
    });

    act(() => {
      articles_creator_actions.change('thumbnail', {
        file: {} as File,
        preview: [article.data.thumbnailUrl],
      });
    });

    await waitFor(() => {
      expect(result.current.is).toBe('edition');
      expect(result.current).toMatchSnapshot();
    });

    act(() => {
      articles_creator_actions.confirm();
    });

    expect(result.current.is).toBe('editing');

    await waitFor(() => {
      expect(result.current.is).toBe('edit-fail');
      expect(result.current).toMatchSnapshot();
    });

    restore();
  });

  it('handles load edition data error', async () => {
    server.use(
      rest.get([getPath('Articles'), lang, url].join('/'), (_, res, ctx) => {
        return res(ctx.status(400), ctx.json(mockErrorResponse()));
      })
    );

    const { result, restore } = storeFixture(useArticlesCreatorStore);

    act(() => {
      articles_creator_actions.init(lang, url);
    });

    expect(result.current.is).toBe('loading');
    expect((result.current as ArticlesCreator.Loading).url).toBe(url);

    await waitFor(() => {
      expect(result.current.is).toBe('load-fail');
      expect(result.current).toMatchSnapshot();
    });

    restore();
  });

  it('loads edition data when url passed', async () => {
    server.use(
      rest.get([getPath('Articles'), lang, url].join('/'), (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockGetArticleResponse()));
      })
    );

    const { result, restore } = storeFixture(useArticlesCreatorStore);

    act(() => {
      articles_creator_actions.init(lang, url);
    });

    expect(result.current.is).toBe('loading');
    expect((result.current as ArticlesCreator.Loading).url).toBe(url);

    await waitFor(() => {
      expect(result.current.is).toBe('edition');
      expect(result.current).toMatchSnapshot();
    });

    restore();
  });

  it('handles creation error', async () => {
    server.use(
      rest.post(getPath('Articles'), (_, res, ctx) => {
        return res(ctx.status(400), ctx.json(mockErrorResponse()));
      })
    );

    const { result, restore } = storeFixture(useArticlesCreatorStore);

    act(() => {
      articles_creator_actions.init(lang);
      articles_creator_actions.change('title', 'my-title');
      articles_creator_actions.change('thumbnail', {
        file: {} as File,
        preview: [],
      });
      articles_creator_actions.confirm();
    });

    expect(result.current.is).toBe('creating');

    await waitFor(() => {
      expect(result.current.is).toBe('create-fail');
      expect(result.current).toMatchSnapshot();
    });

    restore();
  });

  it('creates article', async () => {
    server.use(
      rest.post(getPath('Articles'), (_, res, ctx) => {
        return res(ctx.status(200));
      })
    );

    const { result, restore } = storeFixture(useArticlesCreatorStore);

    act(() => {
      articles_creator_actions.init(lang);
      articles_creator_actions.change('title', 'my-title');
      articles_creator_actions.change('thumbnail', {
        file: {} as File,
        preview: [mockGetArticleResponse().data.thumbnailUrl],
      });
      articles_creator_actions.confirm();
    });

    expect(result.current.is).toBe('creating');

    await waitFor(() => {
      expect(result.current.is).toBe('created');
      expect(result.current).toMatchSnapshot();
    });

    restore();
  });
});
