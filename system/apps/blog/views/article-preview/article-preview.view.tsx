import { useArticleParams } from '../../core/articles';
import { ArticleScreen, MainLayout } from '../../components';
import { FailScreen } from '../article-review/components/fail-screen';
import { useLang } from '../../dk';
import {
  article_actions,
  article_selectors,
  useArticleStore,
} from '../../store/article';
import { useEffect } from 'react';
import { Box, Button, EditIcon, Font, Loader } from '@system/figa-ui';
import { ArticleDetails } from 'apps/blog/components/article-details';
import { ArticleThumbnail } from 'apps/blog/components/article-thumbnail';
import { ArticleTags } from 'apps/blog/components/article-tags';
import { ArticleStatusBadge } from 'apps/blog/components/article-status-badge';
import Markdown from 'markdown-to-jsx';
import { article_mdx_options } from 'apps/blog/core';
import { auth_selectors } from 'apps/blog/store/auth';
import { Bar } from 'apps/blog/components/bar';
import Link from 'next/link';

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
  const isAuthor = auth_selectors.useIsAuthor(authorName);
  const params = useArticleParams();

  if (params.is !== 'ok') return null;

  return (
    <Bar>
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
          <FailScreen onRetry={() => window.location.reload()} />
        )}
        {params.is === 'ok' && articleStore.is === 'ok' && <Content />}
      </MainLayout>
      {articleStore.is === 'ok' && <Toolbox />}
    </>
  );
};

export { ArticlePreviewView };
