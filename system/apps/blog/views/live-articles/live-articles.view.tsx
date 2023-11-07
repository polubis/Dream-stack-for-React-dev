import type { LiveArticlesViewProps } from './defs';
import styled from 'styled-components';
import { column, tokens } from '@system/figa-ui';
import { ArticlesJumbo } from './articles-jumbo';
import { articles_actions, useArticlesStore } from '../../store/articles';
import {
  ArticlesScreen,
  type ArticlesScreenContentProps,
} from '../../components/articles-screen';

const Container = styled.div`
  ${column()}

  .articles-grid {
    padding: ${tokens.spacing[400]} 0;
  }
`;

const path: ArticlesScreenContentProps['path'] = (lang, article) => {
  return `/${lang}/articles/${article.url}`;
};

const LiveArticlesView = () => {
  return (
    <ArticlesScreen>
      <Container>
        <ArticlesJumbo />
        <ArticlesScreen.Content path={path} />
      </Container>
    </ArticlesScreen>
  );
};

const ConnectedLiveArticlesView = ({
  params,
  response,
}: LiveArticlesViewProps) => {
  const articlesStore = useArticlesStore();

  if (articlesStore.is === 'idle') {
    articles_actions.syncFromServer(params, response.data);
  }

  return <LiveArticlesView />;
};

export { ConnectedLiveArticlesView as LiveArticlesView };
