import { getArticles, getError } from '@system/blog-api';
import type { LiveArticlesStore } from './defs';
import { useLiveArticlesStore } from './live-articles.store';
import type { GetArticlesResponse } from '@system/blog-api-models';
import { live_articles_selectors } from './live-articles.selectors';

const { setState } = useLiveArticlesStore;

const checkHasLoadedAll = ({
  totalPages,
  currentPage,
}: GetArticlesResponse): boolean => currentPage >= totalPages;

export const live_articles_actions: LiveArticlesStore.Actions = {
  /**
   * Starts articles loading on client side. Should
   * be called only once - at beginning. For example when
   * user lands on dedicated page first time.
   */
  initialize: async (params) => {
    setState({ is: 'busy' });

    try {
      const response = await getArticles(params);
      setState({
        is: 'ok',
        articles: response.data,
        allLoaded: checkHasLoadedAll(response),
      });
    } catch (error: unknown) {
      setState({ is: 'fail', error: getError(error) });
    }
  },
  /**
   * Should be used to load more articles.
   */
  loadMore: async (params) => {
    setState({ is: 'loading' });

    try {
      const response = await getArticles(params);

      setState({
        is: 'ok',
        articles: [...live_articles_selectors.articles(), ...response.data],
        allLoaded: checkHasLoadedAll(response),
      });
    } catch (error: unknown) {
      setState({ is: 'fail', error: getError(error) });
    }
  },
};
