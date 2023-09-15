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
import type { ArticleReviewParams } from './defs';
import { useArticleReviewParams } from './use-article-review-params';
import { ReviewScreen } from './components/review-screen';

const Content = ({ url, id }: ArticleReviewParams) => {
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

  return <ReviewScreen />
};

const ArticleReviewView = () => {
  const params = useArticleReviewParams();

  return (
    <MainLayout sidebar={() => <div>siema</div>}>
      {params.is === 'fail' && (
        <FailScreen onRetry={() => window.location.reload()} />
      )}
      {params.is === 'ok' && <Content {...params.query} />}
    </MainLayout>
  );
};

export { ArticleReviewView };
