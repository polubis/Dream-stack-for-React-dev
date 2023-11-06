import { Button, CloseIcon, Input, M_UP, size, tokens } from '@system/figa-ui';
import { useArticlesStore } from 'apps/blog/store/articles';
import { articles_selectors } from 'apps/blog/store/articles/articles.selectors';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .input {
    .suffx-wrapper button.button {
      ${size(tokens.spacing[500])}
      background: transparent;
      padding: 0;
      font-size: unset;

      &:active {
        outline: none;
      }

      path {
        fill: ${(props) => props.theme.font.default.color};
      }
    }

    @media ${M_UP} {
      width: 300px;
    }
  }
`;

const ArticlesSearchInput = () => {
  const {
    filters: { Search },
    is,
  } = articles_selectors.useSafeState();
  const [search, setSearch] = useState(Search);

  return (
    <Container>
      <Input
        value={Search}
        loading={is === 'loading'}
        placeholder="🏸 Type to find article..."
        // onChange={(e) => onChange(e.target.value)}
        // suffx={
        //   search.length > 0 && (
        //     <Button onClick={() => onChange('')}>
        //       <CloseIcon />
        //     </Button>
        //   )
        // }
      />
    </Container>
  );
};

export { ArticlesSearchInput };
