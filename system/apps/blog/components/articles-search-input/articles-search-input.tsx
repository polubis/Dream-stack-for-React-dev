import { Button, CloseIcon, Input, M_UP, size, tokens } from '@system/figa-ui';
import type { ArticlesSearchProps } from './defs';
import styled from 'styled-components';

const Container = styled.div`
  .input {
    .suffx-wrapper .button {
      ${size(tokens.spacing[500])}
      background: transparent;
      padding: 0;

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

const ArticlesSearchInput = ({
  loading,
  search,
  onChange,
}: ArticlesSearchProps) => {
  return (
    <Container>
      <Input
        loading={loading}
        value={search}
        placeholder="🏸 Type to find article..."
        onChange={(e) => onChange(e.target.value)}
        suffx={
          search.length > 0 && (
            <Button onClick={() => onChange('')}>
              <CloseIcon />
            </Button>
          )
        }
      />
    </Container>
  );
};

export { ArticlesSearchInput };
