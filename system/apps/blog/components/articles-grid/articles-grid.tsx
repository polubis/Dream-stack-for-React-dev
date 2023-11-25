import { L_DOWN, M_DOWN, SM_DOWN, T_DOWN, tokens } from '@system/figa-ui';
import styled from 'styled-components';
import { ArticleTile } from './article-tile';
import type { ArticlesGridProps } from './defs';

const tile_width = 300;
const tile_height = 400;

const Container = styled.div`
  display: grid;
  justify-content: center;
  gap: ${tokens.spacing[250]};
  grid-auto-rows: ${tile_height}px;
  grid-template-columns: repeat(4, minmax(auto, ${tile_width}px));

  @media ${L_DOWN} {
    grid-template-columns: repeat(3, minmax(auto, ${tile_width}px));
  }

  @media ${T_DOWN} {
    grid-template-columns: repeat(2, minmax(auto, ${tile_width}px));
  }

  @media ${M_DOWN} {
    grid-template-columns: repeat(1, minmax(auto, ${tile_width}px));
  }

  @media ${SM_DOWN} {
    grid-template-columns: 100%;
  }
`;

const stack = ['React', 'Angular', 'NX', 'TypeScript', 'JavaScript', 'NodeJS'];

const ArticlesGrid = ({ articles, url }: ArticlesGridProps) => {
  return (
    <Container className="articles-grid">
      {articles.map((article) => (
        <ArticleTile
          key={article.id}
          id={article.id}
          status={article.status}
          title={article.title}
          description={article.description}
          thumbnail={article.thumbnailUrl}
          author={article.authorName}
          stack={stack}
          tags={article.tags}
          width={tile_width}
          url={url(article)}
        />
      ))}
    </Container>
  );
};

export { ArticlesGrid };
