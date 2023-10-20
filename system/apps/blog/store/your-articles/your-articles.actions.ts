import { getError, getYourArticles } from '@system/blog-api';
import { YourArticlesStore } from './defs';
import { useYourArticlesStore } from './your-articles.store';
import { your_articles_selectors } from './your-articles.selectors';

const { setState } = useYourArticlesStore;

const your_articles_actions: YourArticlesStore.Actions = {
  load: async (params) => {
    setState({ is: 'safe', loading: true });

    try {
      const { data } = await getYourArticles(params);
      setState({ loading: false, articles: data, error: null });
    } catch (error: unknown) {
      setState({ loading: false, error: getError(error) });
    }
  },
  loadMore: async (params) => {
    setState({ is: 'safe', loading: true });

    try {
      const { data } = await getYourArticles(params);

      setState({
        loading: false,
        articles: [...your_articles_selectors.safeState().articles, ...data],
        error: null,
      });
    } catch (error: unknown) {
      setState({ loading: false, error: getError(error) });
    }
  },
};

export { your_articles_actions };
