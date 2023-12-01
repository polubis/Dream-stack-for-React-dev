import { Box, CodeBlock, Font } from '@system/figa-ui';
import type { HomeViewProps } from './defs';
import { MainLayout } from '../../components';

const HomeView = ({ articles }: HomeViewProps) => {
  return (
    <MainLayout>
      <Box spacing={[150]}>
        <CodeBlock>
          <Font variant="h5">{articles.length} articles</Font>
        </CodeBlock>
      </Box>
    </MainLayout>
  );
};

export { HomeView };
