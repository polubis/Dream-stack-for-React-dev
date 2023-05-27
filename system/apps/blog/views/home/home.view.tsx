import { Font } from '@system/figa-ui';
import type { HomeViewProps } from './defs';
import { MainLayout } from '../../components';

const HomeView = ({ articles }: HomeViewProps) => {
  return (
    <MainLayout>
      <Font variant="h1">Headline1</Font>
    </MainLayout>
  );
};

export { HomeView };
