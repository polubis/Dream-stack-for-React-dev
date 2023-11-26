import { MainLayout } from '../../components';
import type { LiveArticlesViewProps } from './defs';
import {
  live_articles_actions,
  live_articles_selectors,
} from '../../store/live-articles';
import { LeftBar } from '../../components/main-layout/left-bar';
import {
  ArticlesScreen,
  type ArticlesScreenProps,
} from '../../components/articles-screen';
import { ArticlesJumbo } from './articles-jumbo';

const makeUrl: ArticlesScreenProps['makeUrl'] = (lang, article) =>
  `/${lang}/articles/${article.url}`;

const LiveArticlesView = ({ params, response }: LiveArticlesViewProps) => {
  const state = live_articles_selectors.useState();

  if (state.is === 'idle') {
    live_articles_actions.sync(params, response.data);
  }

  return (
    <>
      <MainLayout offPadding>
        <ArticlesScreen
          selectors={live_articles_selectors}
          actions={live_articles_actions}
          makeUrl={makeUrl}
          filters={<ArticlesJumbo />}
        />
      </MainLayout>
      <LeftBar />
    </>
  );
};

export { LiveArticlesView };
