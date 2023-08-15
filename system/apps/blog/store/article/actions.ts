import type { FullArticleDto, GetArticleParams } from '@system/blog-api-models';
import { useArticleStore } from './store';
import { getArticle, getError } from '@system/blog-api';

const article_actions = {
  reset: (): void => {
    useArticleStore.setState({ is: 'idle' });
  },
  load: async (payload: GetArticleParams): Promise<FullArticleDto> => {
    try {
      useArticleStore.setState({ is: 'busy' });

      const { data: article } = await getArticle(payload);

      useArticleStore.setState({ is: 'ok', article });

      return article;
    } catch (error: unknown) {
      useArticleStore.setState({ is: 'fail', error: getError(error) });
      throw error;
    }
  },
};

export { article_actions };
