import { MDXRemote } from 'next-mdx-remote';
import { MainLayout, PageWrapper } from '../../components';
import type { ArticleViewProps } from './defs';
import { ArticleScreen } from '../../components/article-screen';
import { useArticleStore } from '../../store/article';
import { useRouter } from 'next/router';
import { Box, Loader } from '@system/figa-ui';

const Content = ({ mdx, article }: ArticleViewProps) => {
  const articleStore = useArticleStore();

  if (articleStore.is === 'idle') {
    useArticleStore.setState({ is: 'ok', article });
  }

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

const ArticleView = (props: ArticleViewProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <MainLayout>
        <Box margin="auto">
          <Box margin="auto">
            <Loader size="big" />
          </Box>
        </Box>
      </MainLayout>
    );
  }

  return <Content {...props} />;
};

export { ArticleView };
