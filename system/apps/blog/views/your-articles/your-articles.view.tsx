import { MainLayout } from '../../components';
import { SignedInOnly } from '../../core';
import { ExpirationInfo } from '../../components/expiration-info-section';
import {
  your_articles_actions,
  your_articles_selectors,
} from '../../store/your-articles';
import {
  ArticlesScreen,
  type ArticlesScreenProps,
} from '../../components/articles-screen';

const makeUrl: ArticlesScreenProps['makeUrl'] = (lang, article) =>
  `/${lang}/articles/preview?id=${article.id}&url=${article.url}`;

const YourArticlesView = () => (
  <MainLayout offPadding>
    <SignedInOnly fallback={<ExpirationInfo />}>
      <ArticlesScreen
        actions={your_articles_actions}
        selectors={your_articles_selectors}
        loadOnInit
        makeUrl={makeUrl}
      />
    </SignedInOnly>
  </MainLayout>
);

export { YourArticlesView };
