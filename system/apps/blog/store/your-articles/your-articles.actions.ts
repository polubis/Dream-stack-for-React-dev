import { getError, getYourArticles } from '@system/blog-api';
import { YourArticlesStore } from './defs';
import { useYourArticlesStore } from './your-articles.store';

const { setState, getState } = useYourArticlesStore;

const your_articles_actions: YourArticlesStore.Actions = {
  load: async (params) => {
    setState({ loading: true, params });

    try {
      const { data } = await getYourArticles(params);
      setState({ loading: false, articles: data, error: null });
    } catch (error: unknown) {
      setState({ loading: false, error: getError(error) });
    }
  },
  loadMore: async (params) => {
    setState({ loading: true, params });

    try {
      const { data } = await getYourArticles(params);

      setState({
        loading: false,
        articles: [...getState().articles, ...data],
        error: null,
      });
    } catch (error: unknown) {
      setState({ loading: false, error: getError(error) });
    }
  },
};

export { your_articles_actions };
