import { MDXRemote } from 'next-mdx-remote';
import { PageWrapper } from '../../components';
import type { ArticleViewProps } from './defs';
import { ArticleScreen } from '../../components/article-screen';
import { useStoreSync } from '../../store/use-store-sync';
import { useArticleStore } from '../../store/article';

const ArticleView = ({ mdx, article }: ArticleViewProps) => {
  useStoreSync(useArticleStore, { is: 'ok', article })();

  return (
    <ArticleScreen
      body={() => (
        <PageWrapper>
          <MDXRemote {...mdx} />
        </PageWrapper>
      )}
    />
  );
};

export { ArticleView };
