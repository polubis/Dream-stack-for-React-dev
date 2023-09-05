import { row, shape, tokens } from '@system/figa-ui';
import type { ArticleMetaProps } from './defs';
import styled from 'styled-components';

const Container = styled.div`
  ${row()}

  & > *:not(:last-child) {
    ${row()}

    &::after {
      content: '';
      display: block;
      ${shape(tokens.spacing[100], tokens.radius[1000])}
      background: ${tokens.common.white};
      margin: 0 ${tokens.spacing[100]};
    }
  }
`;

const ArticleMeta = ({ children }: ArticleMetaProps) => {
  return <Container>{children}</Container>;
};

export { ArticleMeta };
