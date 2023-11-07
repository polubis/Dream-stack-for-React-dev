import { SignedInOnly } from '../../core';
import { ArticlesLayout } from '../../components/articles-layout';
import {
  ArticlesScreen,
  type ArticlesScreenContentProps,
} from '../../components/articles-screen';
import { ArticlesFiltersBar } from '../../components/articles-filters-bar';

const path: ArticlesScreenContentProps['path'] = (lang, article) => {
  return `/${lang}/articles/preview?id=${article.id}&url=${article.url}`;
};

const YourArticlesView = () => {
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
