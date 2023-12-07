import { MainLayout } from '../../components';
import type { LiveArticlesViewProps } from './defs';
import {
  live_articles_actions,
  live_articles_selectors,
} from '../../store/live-articles';
import { ArticlesScreen } from '../../components/articles-screen';

const LiveArticlesView = ({ params, response }: LiveArticlesViewProps) => {
  const state = live_articles_selectors.useState();

  if (state.is === 'idle') {
    live_articles_actions.sync(params, response.data);
  }

  return (
    <MainLayout offPadding>
      <ArticlesScreen
        selectors={live_articles_selectors}
        actions={live_articles_actions}
      />
    </MainLayout>
  );
};

export { LiveArticlesView };
