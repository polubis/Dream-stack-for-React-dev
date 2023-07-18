import c from 'classnames';
import styled from 'styled-components';
import type { ArticleLayoutProps } from './defs';
import { tokens } from '../theme-provider';

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  .code-block,
  .image,
  .list {
    padding: ${tokens.spacing[200]} 0;
  }

  .b1 {
    padding: ${tokens.spacing[25]} 0;
  }

  .h1 {
    margin-bottom: ${tokens.spacing[100]};
  }

  .h2 {
    margin-bottom: ${tokens.spacing[150]};
  }

  .h3,
  .h4 {
    margin-bottom: ${tokens.spacing[150]};
  }

  .h5 {
    margin-bottom: ${tokens.spacing[150]};
  }

  .h6 {
    margin-bottom: ${tokens.spacing[100]};
  }

  & > *:not(.h1, h2, .h3, .h4, .h5, .h6) + .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    margin-top: ${tokens.spacing[200]};
  }

  .ordered + .unordered {
    padding: 0 0 0 ${tokens.spacing[250]};

    & + *:not(.ordered, .unordered, .h1, h2, .h3, .h4, .h5, .h6) {
      margin-top: ${tokens.spacing[250]};
    }
  }

  .font {
    .code {
      display: inline-table;

      .cm-gutters {
        display: none;
      }
    }
  }

  .thumbnail {
    margin-bottom: ${tokens.spacing[300]};

    .image {
      padding: 0;
    }
  }

  .image {
    display: block;

    img {
      max-width: 100%;
    }

    & + .italic {
      display: block;
      transform: translateY(-${tokens.spacing[150]});
    }
  }
`;

const ArticleLayout = ({
  className,
  children,
  thumbnail,
}: ArticleLayoutProps) => {
  return (
    <Container className={c('article-layout', className)}>
      {thumbnail}
      {children}
    </Container>
  );
};

export { ArticleLayout };
