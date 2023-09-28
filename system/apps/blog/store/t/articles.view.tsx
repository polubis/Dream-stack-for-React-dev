import { Alert, Loader } from '@system/figa-ui';
import { useArticlesStore } from './articles.store';
import { ArticlesList } from '@components';
import { useEffect } from 'react';
import { articles_store_actions } from './articles.store.actions';
import { articles_store_selectors } from './articles.store.selectors';

// This may be reused in any other view.
const ConnectedArticlesList = () => {
  const articles = articles_store_selectors.useArticles();

  return <ArticlesList articles={articles} />;
};

// This may be reused in any other view.
const ConnectedAlert = () => {
  // Additional selector used to pick error
  // message if state is in "fail" stage.
  const error = articles_store_selectors.useError();

  // Retrying if error occurs...
  const handleRetry = (): void => {
    articles_store_actions.reset();
    articles_store_actions.init();
  };

  return (
    <Alert type="error" onClick={handleRetry}>
      {error}
    </Alert>
  );
};

export const ArticlesView = () => {
  const state = useArticlesStore();
  const { is } = state;

  useEffect(() => {
    // Starts articles loading process.
    articles_store_actions.init();
  }, []);

  if (is === 'idle' || is === 'busy') return <Loader />;
  if (is === 'fail') return <ConnectedAlert />;
  if (is === 'ok') return <ConnectedArticlesList />;
  // For case if someone will add next state variant and forget to
  // add support in rendering.
  throw Error('You tried to render UI with unsupported state!');
};
