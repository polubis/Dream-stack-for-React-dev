import { Button, CloseIcon, Input, M_UP, size, tokens } from '@system/figa-ui';
import { useArticlesFilters } from 'apps/blog/views/live-articles/use-articles-filters';
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
    change,
  } = useArticlesFilters();

  return (
    <Container>
      <Input
        value={Search}
        placeholder="🏸 Type to find article..."
        onChange={(e) =>
          change({
            Search: e.target.value,
          })
        }
        suffx={
          Search.length > 0 && (
            <Button
              onClick={() =>
                change({
                  Search: '',
                })
              }
            >
              <CloseIcon />
            </Button>
          )
        }
      />
    </Container>
  );
};

export { ArticlesSearchInput };
