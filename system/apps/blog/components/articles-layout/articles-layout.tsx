import { T_DOWN, column, tokens } from '@system/figa-ui';
import styled from 'styled-components';
import type { ArticlesLayoutProps } from './defs';

const Container = styled.div`
  ${column()}

  .articles-grid {
    margin: ${tokens.spacing[200]} 0 ${tokens.spacing[300]} 0;
  }
`;

const Filters = styled.div`
  display: grid;
  gap: ${tokens.spacing[200]};
  justify-content: center;
  grid-template-columns: 300px 280px auto auto;
  padding: ${tokens.spacing[300]};

  @media ${T_DOWN} {
    width: 100%;
    overflow-x: auto;
    justify-content: flex-start;
  }
`;

const ArticlesLayout = ({ children }: ArticlesLayoutProps) => {
  return <Container>{children}</Container>;
};

ArticlesLayout.Filters = Filters;

export { ArticlesLayout };
