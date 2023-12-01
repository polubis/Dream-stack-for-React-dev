import {
  Box,
  CodeBlock,
  Font,
  AlertsProvider,
  useAlert,
} from '@system/figa-ui';
import type { HomeViewProps } from './defs';
import { MainLayout } from '../../components';

const Component = () => {
  const { show } = useAlert();

  return (
    <Box spacing={[150]}>
      <CodeBlock>
        <Font
          variant="h5"
          onClick={() =>
            show({
              type: 'ok',
              children: 'Siema',
            })
          }
        >
          articles
        </Font>
      </CodeBlock>
    </Box>
  );
};

const HomeView = ({ articles }: HomeViewProps) => {
  return (
    <MainLayout>
      <AlertsProvider>
        <Component />
      </AlertsProvider>
    </MainLayout>
  );
};

export { HomeView };
