import { useArticleParams } from '../../core/articles';
import { ArticleScreen, MainLayout } from '../../components';
import { useLang } from '../../dk';
import {
  article_actions,
  article_selectors,
  useArticleStore,
} from '../../store/article';
import { useEffect } from 'react';
import {
  Box,
  Button,
  CloseIcon,
  EditIcon,
  Font,
  Loader,
  Popover,
  ReviewsIcon,
} from '@system/figa-ui';
import { ArticleDetails } from '../../components/article-details';
import { ArticleThumbnail } from '../../components/article-thumbnail';
import { ArticleTags } from '../../components/article-tags';
import { ArticleStatusBadge } from '../../components/article-status-badge';
import Markdown from 'markdown-to-jsx';
import { article_mdx_options } from '../../core';
import { auth_selectors } from '../../store/auth';
import { Bar } from '../../components/bar';
import Link from 'next/link';
import {
  article_reviews_actions,
  useArticleReviewsStore,
} from '../../store/article-reviews';
import { ArticleReviewsList } from '../../components/article-reviews-list';
import { InfoSection } from '../../components/info-section';

const Content = () => {
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
    <ArticleScreen
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
      body={<Markdown options={article_mdx_options}>{content}</Markdown>}
    />
  );
};

const Toolbox = () => {
  const lang = useLang();
  const { authorName } = article_selectors.useArticle();
  const articleReviewsStore = useArticleReviewsStore();
  const isAuthor = auth_selectors.useIsAuthor(authorName);
  const params = useArticleParams();

  if (params.is !== 'ok') return null;

  return (
    <Bar>
      <Popover
        trigger={({ toggle }) => (
          <Button
            size={2}
            title="Reviews"
            loading={articleReviewsStore.is === 'busy'}
            shape="rounded"
            onClick={async () => {
              if (articleReviewsStore.is === 'ok') {
                toggle();
                return;
              }

              await article_reviews_actions.load(params.query.id);
              toggle();
            }}
          >
            <ReviewsIcon />
          </Button>
        )}
      >
        {({ close }) => (
          <Box
            padding={[250, 250, 250, 250]}
            variant="outlined"
            minWidth="280px"
            maxWidth="500px"
          >
            <Box spacing={[250, 500]}>
              <Box orientation="row" between>
                <Font variant="h6">
                  Reviews{' '}
                  {articleReviewsStore.is === 'ok' &&
                    `(${articleReviewsStore.reviews.length})`}
                </Font>
                <Button
                  size={1}
                  shape="rounded"
                  variant="outlined"
                  motive="tertiary"
                  onClick={close}
                >
                  <CloseIcon />
                </Button>
              </Box>
              <Box>
                <ArticleReviewsList />
              </Box>
            </Box>
          </Box>
        )}
      </Popover>

      {isAuthor && (
        <Link href={`/${lang}/articles-creator?url=${params.query.url}`}>
          <Button size={2} shape="rounded">
            <EditIcon />
          </Button>
        </Link>
      )}
    </Bar>
  );
};

const ArticlePreviewView = () => {
  const lang = useLang();
  const articleStore = useArticleStore();
  const params = useArticleParams();

  useEffect(() => {
    if (params.is === 'ok') {
      article_actions.load({ url: params.query.url, lang });
    }
  }, [lang, params]);

  return (
    <>
      <MainLayout sticky offPadding>
        {(articleStore.is === 'idle' ||
          params.is === 'busy' ||
          articleStore.is === 'busy') && (
          <Box center orientation="row">
            <Loader size="big" />
          </Box>
        )}
        {(params.is === 'fail' || articleStore.is === 'fail') && (
          <InfoSection
            title="❌ Ups... Something went wrong!"
            description="Try again with button below or refresh page if problem occurs 🔃."
            footer={
              <Button onClick={() => window.location.reload()}>Retry</Button>
            }
          />
        )}
        {params.is === 'ok' && articleStore.is === 'ok' && <Content />}
      </MainLayout>
      {articleStore.is === 'ok' && <Toolbox />}
    </>
  );
};

export { ArticlePreviewView };
