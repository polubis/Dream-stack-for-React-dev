import { T_DOWN, column, tokens } from '@system/figa-ui';
import styled from 'styled-components';
import { ArticlesLayoutProps } from './defs';
import { MainLayout } from '../main-layout';
import { LeftBar } from '../left-bar';

const Container = styled.div`
  ${column()}
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

const Content = styled.div`
  .articles-grid {
    margin: ${tokens.spacing[200]} 0 ${tokens.spacing[300]} 0;
  }
`;

const ArticlesLayout = ({ children }: ArticlesLayoutProps) => {
  return (
    <>
      <MainLayout offPadding>
        <Container>{children}</Container>
      </MainLayout>
      <LeftBar />
    </>
  );
};

ArticlesLayout.Filters = Filters;
ArticlesLayout.Content = Content;

export { ArticlesLayout };
