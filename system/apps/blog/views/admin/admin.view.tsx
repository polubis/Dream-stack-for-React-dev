import styled from 'styled-components';
import { AdminLayout } from '../../components';
import { Font, Loader, column, tokens } from '@system/figa-ui';
import { ArticlesFiltersHeader } from './articles-filters-header';
import { AdminsOnly } from '../../core';
import { useEffect } from 'react';
import { articles_actions, useArticlesStore } from '../../store/articles';
import { ArticlesSection } from './articles-section';

const Container = styled.div`
  ${column()}

  .loader {
    margin: ${tokens.spacing[500]} auto 0 auto;
  }

  & > *:first-child {
    margin-bottom: ${tokens.spacing[500]};
  }

  .all-loaded-message,
  .no-data-message {
    text-align: center;
    padding: ${tokens.spacing[400]} ${tokens.spacing[250]} 0
      ${tokens.spacing[250]};
  }
`;

const AdminView = () => {
  const articlesStore = useArticlesStore();

  useEffect(() => {
    articles_actions.init();
  }, []);

  const { is } = articlesStore;

  return (
    <AdminLayout>
      <Container>
        <ArticlesFiltersHeader />

        {(is === 'idle' || is === 'busy') && <Loader size="big" />}

        {(is === 'ok' || is === 'loading' || is === 'all_loaded') && (
          <>
            {articlesStore.articles.length === 0 ? (
              <Font className="no-data-message" variant="h5">
                No data found
              </Font>
            ) : (
              <>
                <ArticlesSection articles={articlesStore.articles} />

                {is === 'all_loaded' && (
                  <Font className="all-loaded-message" variant="h5">
                    All data loaded
                  </Font>
                )}
              </>
            )}
          </>
        )}
      </Container>

      {is === 'fail' && <span>Error</span>}
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
