import { MainLayout } from '../../components';
import { AdminsOnly } from '../../core';
import { ExpirationInfo } from '../../components/expiration-info-section';
import {
  ArticlesScreen,
  type ArticlesScreenProps,
} from '../../components/articles-screen';
import {
  admin_articles_actions,
  admin_articles_selectors,
} from '../../store/admin-articles';

const makeUrl: ArticlesScreenProps['makeUrl'] = (lang, article) =>
  `/${lang}/admin/article-review?url=${article.url}&id=${article.id}`;

const AdminView = () => {
  return (
    <MainLayout offPadding>
      <AdminsOnly fallback={<ExpirationInfo />}>
        <ArticlesScreen
          actions={admin_articles_actions}
          selectors={admin_articles_selectors}
          loadOnInit
          makeUrl={makeUrl}
        />
      </AdminsOnly>
    </MainLayout>
  );
};

export { AdminView };
