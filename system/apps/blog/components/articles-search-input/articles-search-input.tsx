import { Button, CloseIcon, Input, M_UP, size, tokens } from '@system/figa-ui';
import type { ArticlesSearchProps } from './defs';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSubject } from '@system/figa-hooks';

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

const ArticlesSearchInput = ({
  search: initialSearch,
  loading,
  onChange,
}: ArticlesSearchProps) => {
  const [search, setSearch] = useState('');

  const { emit } = useSubject({ delay: 700, cb: onChange });

  const handleChange = (value: string): void => {
    emit(value);
    setSearch(value);
  };

  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  return (
    <Container>
      <Input
        value={search}
        loading={loading}
        placeholder="🏸 Type to find article..."
        onChange={(e) => handleChange(e.target.value)}
        suffx={
          search.length > 0 && (
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
