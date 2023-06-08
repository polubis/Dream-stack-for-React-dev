import c from 'classnames';
import styled from 'styled-components';
import type { ArticleLayoutProps } from './defs';
import { tokens } from '../theme-provider';

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  .h4 {
    margin-bottom: ${tokens.spacing[200]};
  }

  .b1 + .b1 {
    margin-top: ${tokens.spacing[100]};
  }

  .b1 + .h4 {
    margin-top: ${tokens.spacing[500]};
  }

  .b1 + .code-block {
    margin-top: ${tokens.spacing[200]};
  }

  .code-block + .h4 {
    margin-top: ${tokens.spacing[500]};
  }

  .code-block + .b1 {
    margin-top: ${tokens.spacing[200]};
  }
`;

const ArticleLayout = ({ className, children }: ArticleLayoutProps) => {
  return (
    <Container className={c('article-layout', className)}>{children}</Container>
  );
};

export { ArticleLayout };
