import { getArticles, getError } from '@system/blog-api';
import { useLiveArticlesStore } from './live-articles.store';
import { GetArticlesParams } from '@system/blog-api-models';
import { LiveArticlesStore } from './defs';
import { live_articles_selectors } from './live-articles.selectors';

const { setState } = useLiveArticlesStore;

export const live_articles_actions: LiveArticlesStore.Actions = {
  load: async (params = {}) => {
    try {
      const state = live_articles_selectors.safeState();
      const newParams: GetArticlesParams = {
        ...state.params,
        ...params,
        CurrentPage: 1,
      };

      setState({
        is: 'changing_params',
        params: newParams,
      });

      const response = await getArticles(newParams);

      setState({ is: 'ok', response });
    } catch (error: unknown) {
      setState({ is: 'fail', error: getError(error) }, true);
    }
  },
  loadMore: async () => {
    try {
      const state = live_articles_selectors.safeState();
      const newParams: GetArticlesParams = {
        ...state.params,
        CurrentPage: state.params.CurrentPage + 1,
      };

      setState({ is: 'loading_more', params: newParams });

      const response = await getArticles(newParams);

      setState({
        is: 'ok',
        response: {
          ...response,
          data: [...state.response.data, ...response.data],
        },
      });
    } catch (error: unknown) {
      setState({ is: 'fail', error: getError(error) }, true);
    }
  },
};
