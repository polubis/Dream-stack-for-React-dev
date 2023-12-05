import styled from 'styled-components';
import { T_DOWN, column, font, row, tokens } from '@system/figa-ui';
import type { ArticleBodyProps } from './defs';

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
      margin: ${tokens.spacing[200]} 0 ${tokens.spacing[200]} 0;
      max-width: 700px;
    }

    & > *:nth-child(4) {
      margin: 0 0 ${tokens.spacing[600]} 0;
      max-width: 700px;
    }

    .h1 {
      @media ${T_DOWN} {
        ${font('4.4rem', '-1.5px', 'LexendLight', 300)}
      }
    }
  }
`;

const Content = styled.section`
  padding: ${tokens.spacing[250]};

  .code-block,
  .image,
  .list {
    padding: ${tokens.spacing[200]} 0;
  }

  .link {
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  .h1 ~ .b1,
  .h2 ~ .b1,
  .h3 ~ .b1,
  .h4 ~ .b1,
  .h5 ~ .b1,
  .h6 ~ .b1 {
    padding-bottom: ${tokens.spacing[150]};
  }

  .b1 ~ .b1 {
    padding-bottom: ${tokens.spacing[150]};
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

  .h1 {
    ${font('6.2rem', '-1.5px', 'LexendLight', 300)}
  }

  .h2 {
    ${font('5.9rem', '-0.5px', 'LexendLight', 300)}
  }

  .h3 {
    ${font('5rem', '0px', 'LexendRegular', 400)}
  }

  .h4 {
    ${font('4.6rem', '0.25px', 'LexendRegular', 400)}
  }

  .h5 {
    ${font('4.2rem', '0px', 'LexendRegular', 400)}
  }

  .h6 {
    ${font('3.8rem', '0.15px', 'LexendMedium', 500)}
  }

  @media ${T_DOWN} {
    .h1 {
      ${font('4rem', '-1.5px', 'LexendLight', 300)}
    }

    .h2 {
      ${font('3.7rem', '-0.5px', 'LexendLight', 300)}
    }

    .h3 {
      ${font('3.4rem', '0px', 'LexendRegular', 400)}
    }

    .h4 {
      ${font('3.1rem', '0.25px', 'LexendRegular', 400)}
    }

    .h5 {
      ${font('2.8rem', '0px', 'LexendRegular', 400)}
    }

    .h6 {
      ${font('2.5rem', '0.15px', 'LexendMedium', 500)}
    }
  }
`;

const ArticleBody = ({
  meta,
  details,
  badge,
  thumbnail,
  body,
  info,
}: ArticleBodyProps) => {
  return (
    <Container className="article-body">
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

export { ArticleBody };
