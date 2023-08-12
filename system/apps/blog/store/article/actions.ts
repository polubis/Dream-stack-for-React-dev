import type { FullArticleDto, GetArticleParams } from '@system/blog-api-models';
import { useArticleStore } from './store';
import type { Article } from './defs';
import { getArticle, getError } from '@system/blog-api';

const setState = (state: Article.State) =>
  useArticleStore.setState(state, true);

const article_actions = {
  reset: (): void => {
    setState({ is: 'idle' });
  },
  load: async (payload: GetArticleParams): Promise<FullArticleDto> => {
    try {
      setState({ is: 'loading' });

      const { data: article } = await getArticle(payload);

      setState({ is: 'loaded', article });

      return article;
    } catch (error: unknown) {
      setState({ is: 'load-fail', error: getError(error) });
    }
  },
};

export { article_actions };
