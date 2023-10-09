import {
  Box,
  Button,
  CloseIcon,
  FiltersIcon,
  Font,
  Input,
  M_DOWN,
  Popover,
  SearchIcon,
  Select,
  center,
  tokens,
} from '@system/figa-ui';
import { articles_actions, useArticlesStore } from '../../store/articles';
import styled from 'styled-components';
import { ArticleStatus } from '@system/blog-api-models';

const Container = styled.div`
  ${center()}

  & > *:not(:last-child) {
    margin-right: ${tokens.spacing[200]};
  }

  .input {
    max-width: 280px;
    flex-shrink: 0;
  }

  .popover-trigger {
    width: ${tokens.spacing[500]};

    .button {
      width: 100%;
      padding: 0;
    }
  }

  .select {
    max-width: 240px;
  }

  @media ${M_DOWN} {
    .input {
      width: calc(100% - ${tokens.spacing[500]});
    }

    .select {
      display: none;
    }
  }
`;

const ArticlesFiltersHeader = () => {
  const { filters } = useArticlesStore();

  return (
    <Container>
      <Input
        placeholder="Type for search..."
        value={filters.query}
        onChange={(e) => articles_actions.changeQuery(e.target.value)}
        suffx={<SearchIcon />}
      />
      <Select<ArticleStatus>
        placeholder="Choose status"
        value={filters.status}
        onChange={articles_actions.changeStatus}
        options={[
          {
            key: 'Accepted',
            child: <>Accepted</>,
          },
          { key: 'Draft', child: <>Draft</> },
          {
            key: 'NeedWork',
            child: <>Need work</>,
          },
          { key: 'WaitingForApproval', child: <>Waiting for approval</> },
        ]}
      />
      <Popover
        trigger={({ toggle, opened }) => (
          <Button size={2} onClick={toggle}>
            {opened ? <CloseIcon /> : <FiltersIcon />}
          </Button>
        )}
      >
        {() => (
          <Box
            spacing={[200, 400, 400, 100, 400]}
            padding={[250, 250, 250, 250]}
            variant="outlined"
            minWidth="280px"
            maxWidth="420px"
          >
            <Font variant="h5">Additional filters</Font>
          </Box>
        )}
      </Popover>
    </Container>
  );
};

export { ArticlesFiltersHeader };
