import c from 'classnames';
import styled from 'styled-components';
import type { ArticleLayoutProps } from './defs';
import { tokens } from '../theme-provider';

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  .font-h4 {
    margin-bottom: ${tokens.spacing[200]};
  }

  .font-b1 + .font-b1 {
    margin-top: ${tokens.spacing[100]};
  }

  .font-b1 + .font-h4 {
    margin-top: ${tokens.spacing[500]};
  }

  .font-b1 + .code-block {
    margin-top: ${tokens.spacing[200]};
  }

  .code-block + .font-h4 {
    margin-top: ${tokens.spacing[500]};
  }

  .code-block + .font-b1 {
    margin-top: ${tokens.spacing[200]};
  }

  .list + .font-b1 {
    margin-top: ${tokens.spacing[250]};
  }

  .font-b1 + .list {
    margin-top: ${tokens.spacing[250]};
  }

  .image + .font-b1 {
    margin-top: ${tokens.spacing[250]};
  }

  .font-b1 + .image {
    margin-top: ${tokens.spacing[250]};
  }
`;

const ArticleLayout = ({ className, children }: ArticleLayoutProps) => {
  return (
    <Container className={c('article-layout', className)}>{children}</Container>
  );
};

export { ArticleLayout };
