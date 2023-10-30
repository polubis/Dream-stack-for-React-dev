import { MainLayout } from '../../components';
import { useLang } from '../../dk';
import { useEffect } from 'react';
import { article_actions, useArticleStore } from '../../store/article';
import {
  article_reviews_actions,
  useArticleReviewsStore,
} from '../../store/article-reviews';
import { FailScreen } from './components/fail-screen';
import { LoaderScreen } from './components/loader-screen';
import { ReviewScreen } from './components/review-screen';
import { useArticleParams } from '../../core/articles';
import type { ArticleParams } from '../../core/articles/defs';

const Content = ({ url, id }: ArticleParams) => {
  const lang = useLang();
  const articleStore = useArticleStore();
  const articleReviewsStore = useArticleReviewsStore();

  const retry = (): void => {
    articleStore.is === 'fail' && article_actions.load({ url, lang });
    articleReviewsStore.is === 'fail' && article_reviews_actions.load(id);
  };

  useEffect(() => {
    article_actions.load({ url, lang });
  }, [lang, url]);

  useEffect(() => {
    article_reviews_actions.load(id);
  }, [id]);

  const idle = articleStore.is === 'idle' || articleReviewsStore.is === 'idle';
  const busy = articleStore.is === 'busy' || articleReviewsStore.is === 'busy';
  const failed =
    articleStore.is === 'fail' || articleReviewsStore.is === 'fail';

  if (idle || busy) return <LoaderScreen />;
  if (failed) return <FailScreen onRetry={retry} />;

  return <ReviewScreen />;
};

const ArticleReviewView = () => {
  const params = useArticleParams();

  return (
    <MainLayout>
      {params.is === 'fail' && (
        <FailScreen onRetry={() => window.location.reload()} />
      )}
      {params.is === 'ok' && <Content {...params.query} />}
    </MainLayout>
  );
};

export { ArticleReviewView };
