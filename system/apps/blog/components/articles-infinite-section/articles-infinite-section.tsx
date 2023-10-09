import styled from 'styled-components';
import { Font, Loader, SM_DOWN, center, tokens } from '@system/figa-ui';
import { ArticlesSection } from '../articles-section';
import { useArticlesStore } from '../../store/articles';
import type { ArticlesInfiniteSectionProps } from './defs';

const Container = styled.div`
  height: 100%;
  padding: ${tokens.spacing[500]} ${tokens.spacing[250]};

  @media ${SM_DOWN} {
    padding: ${tokens.spacing[250]} 0;

    .article-tile .article-tile-image img {
      border-radius: 0;
    }
  }

  .articles-infinite-section-wrapper {
    ${center()}
    height: 100%;
  }
`;

const ArticlesInfiniteSection = ({
  pathCreator,
}: ArticlesInfiniteSectionProps) => {
  const articlesStore = useArticlesStore();
  const { is } = articlesStore;

  return (
    <Container>
      {(is === 'idle' || is === 'busy') && (
        <div className="articles-infinite-section-wrapper">
          <Loader size="big" />
        </div>
      )}

      {(is === 'ok' || is === 'loading' || is === 'all_loaded') && (
        <>
          {articlesStore.articles.length === 0 ? (
            <div className="articles-infinite-section-wrapper">
              <Font align="center" variant="h5">
                No data found
              </Font>
            </div>
          ) : (
            <ArticlesSection
              articles={articlesStore.articles}
              placeholders={is === 'loading' ? articlesStore.filters.limit : 0}
              pathCreator={pathCreator}
            />
          )}
        </>
      )}
    </Container>
  );
};

export { ArticlesInfiniteSection };
