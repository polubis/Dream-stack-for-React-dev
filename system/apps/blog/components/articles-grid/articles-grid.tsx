import { M_DOWN, size, tokens, wrap } from '@system/figa-ui';
import styled from 'styled-components';
import { ArticleTile } from './article-tile';
import type { ArticlesGridProps } from './defs';

const tile_width = 300;
const tile_height = 400;

const Container = styled.div`
  ${wrap()}

  & > * {
    ${size(`${tile_height}px`, `${tile_width}px;`)}
    margin: 0 ${tokens.spacing[250]} ${tokens.spacing[250]} 0;

    @media ${M_DOWN} {
      width: 100%;
    }
  }
`;

const ArticlesGrid = ({ children }: ArticlesGridProps) => {
  return <Container className="articles-grid">{children}</Container>;
};

ArticlesGrid.Tile = ArticleTile;
ArticlesGrid.tile_width = tile_width;
ArticlesGrid.tile_height = tile_height;

export { ArticlesGrid };
