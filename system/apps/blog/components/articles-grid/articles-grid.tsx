import { L_DOWN, M_DOWN, SM_DOWN, T_DOWN, tokens } from '@system/figa-ui';
import styled from 'styled-components';
import { ArticleTile } from './article-tile';
import type { ArticlesGridProps } from './defs';
import { useMemo } from 'react';

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
    padding: 0;
  }

  @media ${SM_DOWN} {
    grid-template-columns: 100%;
  }
`;

const tags = ['Programming', 'Development', 'Patterns'];

const ArticlesGrid = ({
  articles,
  placeholders = 0,
  onGoToClick,
}: ArticlesGridProps) => {
  const Placeholders = useMemo(
    () =>
      Array.from({ length: placeholders }).map((_, idx) => (
        <div key={'placeholder' + idx} className="article-tile-placeholder" />
      )),
    [placeholders]
  );

  return (
    <Container>
      {articles.map(
        ({ id, title, description, thumbnailUrl, authorName, status }) => (
          <ArticleTile
            key={id}
            id={id}
            status={status}
            title={title}
            description={description}
            thumbnail={thumbnailUrl}
            author={authorName}
            tags={tags}
            width={tile_width}
            onGoToClick={onGoToClick}
          />
        )
      )}
      {Placeholders}
    </Container>
  );
};

export { ArticlesGrid };
