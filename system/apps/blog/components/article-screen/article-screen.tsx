import {
  article_actions,
  article_selectors,
  useArticleStore,
} from '../../store/article';
import { ArticleBody } from '../article-body';
import { MainLayout } from '../main-layout';
import { ArticleDetails } from '../article-details';
import { ArticleThumbnail } from '../article-thumbnail';
import { ArticleTags } from '../article-tags';
import { ArticleStatusBadge } from '../article-status-badge';
import Link from 'next/link';
import { Button, EditIcon, Font } from '@system/figa-ui';
import type { ArticleScreenProps } from './defs';
import { ArticleReviewsPopover } from '../article-reviews-popover';
import { auth_selectors } from '../../store/auth';
import { useLang } from '../../dk';
import { article_reviews_actions } from '../../store/article-reviews';
import { useEffect } from 'react';
import { article_mdx_options } from '../../core';
import { useArticleParams } from '../../core/articles';
import { InfoSection } from '../info-section';
import { ArticleActionsPopover } from '../article-actions-popover';
import { ArticleStatusPopover } from '../article-status-popover';
import { RightBar } from '../main-layout/right-bar';

const Content = ({ body }: Pick<ArticleScreenProps, 'body'>) => {
  const {
    title,
    description,
    authorName,
    thumbnailUrl,
    status,
    content,
    tags,
  } = article_selectors.useArticle();

  return (
    <ArticleBody
      details={
        <ArticleDetails
          title={title}
          description={description}
          authorName={authorName}
        />
      }
      thumbnail={
        <ArticleThumbnail title={title} src={thumbnailUrl} status={status} />
      }
      info={<Font variant="b2">4.5 | 15m | 18/Jan/22</Font>}
      meta={<ArticleTags tags={tags} />}
      badge={<ArticleStatusBadge status={status} />}
      body={body(article_mdx_options, content)}
    />
  );
};

const Toolbox = () => {
  const lang = useLang();
  const { authorName, url, status } = article_selectors.useArticle();
  const isAuthor = auth_selectors.useIsAuthor(authorName);
  const isAdmin = auth_selectors.useIsAdmin();

  useEffect(() => article_reviews_actions.reset(), []);

  return (
    <RightBar>
      {isAuthor && (status === 'Draft' || status === 'NeedWork') && (
        <ArticleStatusPopover />
      )}
      {isAdmin && status === 'WaitingForApproval' && <ArticleActionsPopover />}
      <ArticleReviewsPopover />
      {isAuthor && (
        <Link href={`/${lang}/articles-creator?url=${url}`}>
          <Button size={2} shape="rounded">
            <EditIcon />
          </Button>
        </Link>
      )}
    </RightBar>
  );
};

const DynamicArticleScreen = ({ body }: Pick<ArticleScreenProps, 'body'>) => {
  const lang = useLang();
  const params = useArticleParams();
  const articleStore = useArticleStore();

  useEffect(() => {
    if (params.is !== 'ok') return;
    article_actions.load({ url: params.query.url, lang });
  }, [lang, params]);

  const articleLoaded = articleStore.is === 'ok';
  const articleLoadFailed = articleStore.is === 'fail' || params.is === 'fail';

  return (
    <>
      <MainLayout offPadding>
        {articleLoaded && <Content body={body} />}
        {articleLoadFailed && (
          <InfoSection
            title="❌ Ups... Something went wrong!"
            description="Try again with button below or refresh page if problem occurs 🔃."
            footer={
              <Button onClick={() => window.location.reload()}>Retry</Button>
            }
          />
        )}
      </MainLayout>
      {articleLoaded && <Toolbox />}
    </>
  );
};

const StaticArticleScreen = ({ body }: Pick<ArticleScreenProps, 'body'>) => {
  const articleStore = useArticleStore();
  const articleLoaded = articleStore.is === 'ok';

  return (
    <>
      <MainLayout offPadding>
        {articleLoaded && <Content body={body} />}
      </MainLayout>
      {articleLoaded && <Toolbox />}
    </>
  );
};

const ArticleScreen = ({ body, dynamic }: ArticleScreenProps) => {
  const Component = dynamic ? DynamicArticleScreen : StaticArticleScreen;
  return <Component body={body} />;
};

export { ArticleScreen };
