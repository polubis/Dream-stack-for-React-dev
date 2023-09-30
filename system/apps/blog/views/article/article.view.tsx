import { useEffect } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { ArticleScreen, Link, MainLayout, PageWrapper } from '../../components';
import type { ArticleViewProps } from './defs';
import { ArticleStatusBadge } from '../../components/article-status-badge';
import { ArticleThumbnail } from '../../components/article-thumbnail';
import { ArticleMeta } from '../../components/article-meta';
import { Box, Button, EditIcon, Font } from '@system/figa-ui';
import { ArticleDetails } from '../../components/article-details';
import { article_actions } from '../../store/article';
import { auth_selectors } from '../../store/auth';
import { useLang } from '../../dk';

const ArticleView = ({
  mdx,
  url,
  thumbnailUrl,
  title,
  description,
  authorName,
  status,
}: ArticleViewProps) => {
  const lang = useLang();
  const isAuthor = auth_selectors.useIsAuthor(authorName);

  useEffect(() => {
    return () => article_actions.reset();
  }, []);

  return (
    <MainLayout>
      <Box spacing={[150]}>
        <Box variant="filled" right padding={[200, 250, 200, 250]}>
          {isAuthor && (
            <Link href={`/${lang}/articles-creator?url=${url}`}>
              <Button shape="rounded">
                <EditIcon />
              </Button>
            </Link>
          )}
        </Box>
        <ArticleScreen
          details={
            <ArticleDetails
              title={title}
              description={description}
              authorName={authorName}
            />
          }
          thumbnail={
            <ArticleThumbnail
              title={title}
              src={thumbnailUrl}
              status={status}
            />
          }
          info={
            <ArticleMeta>
              <Font variant="b2">4.5</Font>
              <Font variant="b2">15 min</Font>
              <Font variant="b2">Created: 18 Jan 2022</Font>
              <Font variant="b2">Updated: 18 Jan 2022</Font>
            </ArticleMeta>
          }
          meta={
            <ArticleMeta>
              <Font variant="b2">React, Angular, JavaScript, TypeScript</Font>
              <Font variant="b2">Architecture, Design patterns</Font>
            </ArticleMeta>
          }
          badge={<ArticleStatusBadge status={status} />}
          body={
            <PageWrapper>
              <MDXRemote {...mdx} />
            </PageWrapper>
          }
        />
      </Box>
    </MainLayout>
  );
};

export { ArticleView };
