import { Box, Input } from '@system/figa-ui';
import { articles_actions, useArticlesStore } from '../../store/articles';

const ArticlesFiltersHeader = () => {
  const { filters } = useArticlesStore();

  return (
    <Box orientation="row" center>
      <Box orientation="row" spacing={[150]}>
        <Input
          placeholder="Search by title or description..."
          minWidth="400px"
          value={filters.query}
          onChange={(e) => articles_actions.changeQuery(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export { ArticlesFiltersHeader };
