import { Box, CodeBlock, Font } from '@system/figa-ui';
import type { HomeViewProps } from './defs';
import { MainLayout } from '../../components';
import { Bar } from '../../components/bar';
import ExpandableList from 'apps/blog/components/expandable-list/expandable-list';
const HomeView = ({ articles }: HomeViewProps) => {
  return (
    <>
      <MainLayout>
        <Box spacing={[150]}>
          <CodeBlock>
            <Font variant="h5">{articles.length} articles</Font>
          </CodeBlock>
        </Box>
      </MainLayout>
      <Bar />
    </>
  );
};

export { HomeView };
