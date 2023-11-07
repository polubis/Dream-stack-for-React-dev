import { AdminsOnly } from '../../core';
import { ArticlesLayout } from '../../components/articles-layout';
import { useLang } from '../../dk';
import { articles_actions } from '../../store/articles';
import { articles_selectors } from '../../store/articles/articles.selectors';
import {
  ArticlesScreen,
  ArticlesScreenContentProps,
} from '../../components/articles-screen';
import { ArticlesFiltersBar } from '../../components/articles-filters-bar';

const path: ArticlesScreenContentProps['path'] = (lang, article) => {
  return `/${lang}/admin/article-review?url=${article.url}&id=${article.id}`;
};

const AdminView = () => {
  const lang = useLang();
  const { is } = articles_selectors.useState();

  if (is === 'idle') {
    articles_actions.syncFromClient(lang, false);
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

const ProtectedAdminView = () => {
  return (
    <AdminsOnly>
      <AdminView />
    </AdminsOnly>
  );
};

export { ProtectedAdminView as AdminView };
