import type { ArticlesViewProps } from './defs';

import { LeftBar, MainLayout } from '../../components';
import { useStoreSync } from '../../store/use-store-sync';
import { useArticlesStore } from '../../store/articles';
import { ArticlesJumbo } from '../../components/articles-jumbo';
import { Box } from '@system/figa-ui';
import type { ArticlesSectionProps } from '../../components/articles-section';
import { ArticlesInfiniteSection } from '../../components/articles-infinite-section';

const pathCreator: ArticlesSectionProps['pathCreator'] = (_, { url }) => {
  return `articles/${url}`;
};

const ArticlesView = ({ state }: ArticlesViewProps) => {
  useStoreSync(useArticlesStore, state)();

  return (
    <>
      <MainLayout offPadding>
        <Box>
          <ArticlesJumbo
            title="Find something to read"
            description="We place great emphasis on the quality of our materials. Thanks to this you will be able to understand complex topics"
          />
          <ArticlesInfiniteSection pathCreator={pathCreator} />
        </Box>
      </MainLayout>
      <LeftBar />
    </>
  );
};

export { ArticlesView };
