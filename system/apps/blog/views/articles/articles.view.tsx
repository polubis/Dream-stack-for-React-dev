import { MainLayout } from '../../components';
import type { ArticlesViewProps } from './defs';
import {
  articles_store_actions,
  articles_store_selectors,
} from '../../store/articles';
import { ArticlesScreen } from '../../components/articles-screen';

const ArticlesView = ({ params, response }: ArticlesViewProps) => {
  const state = articles_store_selectors.useState();

  if (state.is === 'idle') {
    articles_store_actions.sync(params, response.data);
  }

  return (
    <MainLayout offPadding>
      <ArticlesScreen
        selectors={articles_store_selectors}
        actions={articles_store_actions}
      />
    </MainLayout>
  );
};

export { ArticlesView };
