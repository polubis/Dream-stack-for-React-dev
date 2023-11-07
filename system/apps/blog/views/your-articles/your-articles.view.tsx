import { SignedInOnly } from '../../core';
import { ArticlesLayout } from '../../components/articles-layout';
import {
  ArticlesScreen,
  type ArticlesScreenContentProps,
} from '../../components/articles-screen';
import { ArticlesFiltersBar } from '../../components/articles-filters-bar';
import { articles_selectors } from '../../store/articles/articles.selectors';
import { articles_actions } from '../../store/articles';
import { useLang } from '../../dk';

const path: ArticlesScreenContentProps['path'] = (lang, article) => {
  return `/${lang}/articles/preview?id=${article.id}&url=${article.url}`;
};

const YourArticlesView = () => {
  const lang = useLang()
  const { is } = articles_selectors.useState();

  if (is === 'idle') {
    articles_actions.syncFromClient(lang, true);
  }

  return (
    <ArticlesScreen>
      <ArticlesLayout>
        <ArticlesLayout.Filters>
          <ArticlesFiltersBar />
        </ArticlesLayout.Filters>
        <ArticlesScreen.Content path={path} />
      </ArticlesLayout>
    </ArticlesScreen>
  );
};

const ProtectedYourArticlesView = () => (
  <SignedInOnly>
    <YourArticlesView />
  </SignedInOnly>
);

export { ProtectedYourArticlesView as YourArticlesView };
