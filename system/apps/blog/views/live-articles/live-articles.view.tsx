import { MainLayout } from '../../components';
import type { LiveArticlesViewProps } from './defs';
import {
  live_articles_actions,
  live_articles_selectors,
} from '../../store/live-articles';
import {
  ArticlesScreen,
  type ArticlesScreenProps,
} from '../../components/articles-screen';
import { ArticlesJumbo } from './articles-jumbo';
import styled from 'styled-components';
import { Button, VIEWPORT, tokens } from '@system/figa-ui';

const makeUrl: ArticlesScreenProps['makeUrl'] = (lang, article) =>
  `/${lang}/articles/${article.url}`;

const Wrapper = styled.div`
  background: #191919;
  padding: ${tokens.spacing[250]};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: ${tokens.spacing[250]};
  max-width: ${VIEWPORT.laptop}px;
  margin: 0 auto;
  height: 100%;

  .articles-filters {
    padding: ${tokens.spacing[250]};
    background: ${(props) => props.theme.box.outlined.bg};
    border: 1px solid #3c3c3c;
    border-radius: ${tokens.radius[25]};
  }

  .articles-content {
    padding: ${tokens.spacing[250]};
    background: ${(props) => props.theme.box.outlined.bg};
    border: 1px solid #3c3c3c;
    border-radius: ${tokens.radius[25]};
  }
`;

const LiveArticlesView = ({ params, response }: LiveArticlesViewProps) => {
  const state = live_articles_selectors.useState();

  if (state.is === 'idle') {
    live_articles_actions.sync(params, response.data);
  }

  return (
    <MainLayout offPadding>
      {/* <ArticlesScreen
        selectors={live_articles_selectors}
        actions={live_articles_actions}
        makeUrl={makeUrl}
        filters={<ArticlesJumbo />}
      /> */}

      <Wrapper>
        <Container>
          <div className="articles-filters">
            <Button size={2} variant="ghost" motive="tertiary">
              Clear All
            </Button>
          </div>
          <div className="articles-content">Right</div>
        </Container>
      </Wrapper>
    </MainLayout>
  );
};

export { LiveArticlesView };
