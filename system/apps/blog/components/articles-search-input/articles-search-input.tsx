import { Button, CloseIcon, Input, M_UP, size, tokens } from '@system/figa-ui';
import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';
import { useSubject } from '@system/figa-hooks';
import { articles_selectors } from '../../store/articles/articles.selectors';
import { useArticlesFiltersProvider } from '../../core/articles-filters-provider/articles-filters-provider';

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
    change,
  } = useArticlesFiltersProvider();
  const { is } = articles_selectors.useState();

  const [search, setSearch] = useState('');

  const updateSearch = useCallback(
    (value: string): void => {
      const filters = { Search: value, CurrentPage: 1 };
      change(filters);
    },
    [change]
  );

  const { emit } = useSubject<string>({
    delay: 500,
    cb: updateSearch,
  });

  const handleChange = (value: string): void => {
    setSearch(value);
    emit(value);
  };

  useEffect(() => {
    setSearch(Search);
  }, [Search]);

  return (
    <Container>
      <Input
        loading={is === 'loading'}
        value={search}
        placeholder="🏸 Type to find article..."
        onChange={(e) => handleChange(e.target.value)}
        suffx={
          Search.length > 0 && (
            <Button onClick={() => handleChange('')}>
              <CloseIcon />
            </Button>
          )
        }
      />
    </Container>
  );
};

export { ArticlesSearchInput };
