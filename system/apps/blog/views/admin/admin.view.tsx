import { AdminLayout } from '../../components';
import { AdminsOnly } from '../../core';
import { useEffect } from 'react';
import { articles_actions } from '../../store/articles';
import {
  FilterableArticlesScreen,
  type FilterableArticlesScreenProps,
} from '../../components/filterable-articles-screen';

const pathCreator: FilterableArticlesScreenProps['pathCreator'] = (
  _,
  { url, id }
) => {
  return `admin/article-review?url=${url}&id=${id}`;
};

const AdminView = () => {
  useEffect(() => {
    articles_actions.init();

    return () => {
      articles_actions.reset();
    };
  }, []);

  return (
    <AdminLayout>
      <FilterableArticlesScreen pathCreator={pathCreator} />
    </AdminLayout>
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
