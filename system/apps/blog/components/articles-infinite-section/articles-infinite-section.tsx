import styled from 'styled-components';
import { Alert, Font, Loader, column, tokens } from '@system/figa-ui';
import { ArticlesSection } from '../articles-section';
import { useArticlesStore } from '../../store/articles';
import type { ArticlesInfiniteSectionProps } from './defs';

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

const ArticlesInfiniteSection = ({
  pathCreator,
}: ArticlesInfiniteSectionProps) => {
  const articlesStore = useArticlesStore();
  const { is } = articlesStore;

  return (
    <>
      <Container>
        {(is === 'idle' || is === 'busy') && <Loader size="big" />}

        {(is === 'ok' || is === 'loading' || is === 'all_loaded') && (
          <>
            {articlesStore.articles.length === 0 ? (
              <Font className="no-data-message" variant="h5">
                No data found
              </Font>
            ) : (
              <>
                <ArticlesSection
                  articles={articlesStore.articles}
                  pathCreator={pathCreator}
                />

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

      {is === 'fail' && (
        <Alert type="error">{articlesStore.error.message}</Alert>
      )}
    </>
  );
};

export { ArticlesInfiniteSection };
