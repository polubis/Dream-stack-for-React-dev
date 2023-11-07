import type { LiveArticlesViewProps } from './defs';
import styled from 'styled-components';
import { column, tokens } from '@system/figa-ui';
import { ArticlesJumbo } from './articles-jumbo';
import { articles_actions, useArticlesStore } from '../../store/articles';
import { ArticlesScreen } from '../../components/articles-screen';

const Container = styled.div`
  ${column()}

  .articles-grid {
    padding: ${tokens.spacing[400]} 0;
  }
`;

const LiveArticlesView = () => {
  return (
    <ArticlesScreen>
      <Container>
        <ArticlesJumbo />
        <ArticlesScreen.Content />
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
    articles_actions.sync(params, response.data);
  }

  return <LiveArticlesView />;
};

export { ConnectedLiveArticlesView as LiveArticlesView };
