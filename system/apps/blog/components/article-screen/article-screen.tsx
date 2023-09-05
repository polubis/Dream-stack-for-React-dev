import styled from 'styled-components';
import { column, row, tokens } from '@system/figa-ui';
import type { ArticleScreenProps } from './defs';

const Container = styled.article`
  max-width: 1080px;
  margin: 0 auto;
`;

const Details = styled.section`
  ${column()}
  padding: ${tokens.spacing[200]} ${tokens.spacing[200]} ${tokens
    .spacing[300]} ${tokens.spacing[200]};

  .top {
    ${row()}
    justify-content: space-between;
  }

  .bottom {
    ${column()}
    align-items: center;

    & > * {
      text-align: center;
    }

    & > *:nth-child(1) {
      margin: ${tokens.spacing[300]} 0 ${tokens.spacing[200]} 0;
    }

    & > *:nth-child(3) {
      margin: ${tokens.spacing[350]} 0 ${tokens.spacing[200]} 0;
      max-width: 700px;
    }

    & > *:nth-child(4) {
      margin: 0 0 ${tokens.spacing[600]} 0;
      max-width: 700px;
    }
  }
`;

const Content = styled.section`
  padding: ${tokens.spacing[500]};

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

const ArticleScreen = ({
  meta,
  details,
  badge,
  thumbnail,
  body,
  info,
}: ArticleScreenProps) => {
  return (
    <Container className="article-screen">
      <Details>
        <div className="top">
          {badge}
          {info}
        </div>

        <div className="bottom">
          {details}
          {meta}
        </div>
      </Details>
      {thumbnail}
      <Content>{body}</Content>
    </Container>
  );
};

export { ArticleScreen };
