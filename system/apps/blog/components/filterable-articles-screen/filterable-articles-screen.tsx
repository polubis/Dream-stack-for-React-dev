import { ArticlesFiltersHeader } from '../articles-filters-header';
import type { FilterableArticlesScreenProps } from './defs';
import { ArticlesInfiniteSection } from '../articles-infinite-section';
import { column } from '@system/figa-ui';
import styled from 'styled-components';

const Container = styled.div`
  ${column()}

  .articles-infinite-section-wrapper {
    height: 100%;
  }
`;

const FilterableArticlesScreen = ({
  pathCreator,
}: FilterableArticlesScreenProps) => {
  return (
    <Container>
      <ArticlesFiltersHeader />
      <ArticlesInfiniteSection pathCreator={pathCreator} />
    </Container>
  );
};

export { FilterableArticlesScreen };
