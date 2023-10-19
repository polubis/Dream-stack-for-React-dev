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

const ArticlesGrid = ({ articles, onGoToClick }: ArticlesGridProps) => {
  return (
    <Container className="articles-grid">
      {articles.map(
        ({
          id,
          title,
          description,
          thumbnailUrl,
          authorName,
          status,
          tags,
        }) => (
          <ArticleTile
            key={id}
            id={id}
            status={status}
            title={title}
            description={description}
            thumbnail={thumbnailUrl}
            author={authorName}
            stack={stack}
            tags={tags}
            width={tile_width}
            onGoToClick={onGoToClick}
          />
        )
      )}
    </Container>
  );
};

export { ArticlesGrid };
