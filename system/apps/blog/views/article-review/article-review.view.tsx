import { MainLayout } from '../../components';
import { useLang } from '../../dk';
import { useEffect } from 'react';
import { article_actions, useArticleStore } from '../../store/article';
import {
  article_reviews_actions,
  useArticleReviewsStore,
} from '../../store/article-reviews';
import { LoaderScreen } from './components/loader-screen';
import { ReviewScreen } from './components/review-screen';
import { useArticleParams } from '../../core/articles';
import type { ArticleParams } from '../../core/articles/defs';
import { InfoSection } from '../../components/info-section';
import { Button } from '@system/figa-ui';

const Content = ({ url, id }: ArticleParams) => {
  const lang = useLang();
  const articleStore = useArticleStore();
  const articleReviewsStore = useArticleReviewsStore();

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
  if (failed)
    return (
      <InfoSection
        title="❌ Ups... Something went wrong!"
        description="Try again with button below or refresh page if problem occurs 🔃."
        footer={<Button onClick={() => window.location.reload()}>Retry</Button>}
      />
    );

  return <ReviewScreen />;
};

const ArticleReviewView = () => {
  const params = useArticleParams();

  return (
    <MainLayout offPadding>
      {params.is === 'fail' && (
        <InfoSection
          title="❌ Ups... Something went wrong!"
          description="Try again with button below or refresh page if problem occurs 🔃."
          footer={
            <Button onClick={() => window.location.reload()}>Retry</Button>
          }
        />
      )}
      {params.is === 'ok' && <Content {...params.query} />}
    </MainLayout>
  );
};

export { ArticleReviewView };
