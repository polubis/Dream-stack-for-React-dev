import { useEffect } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { ArticleScreen, Link, MainLayout, PageWrapper } from '../../components';
import type { ArticleViewProps } from './defs';
import { ArticleStatusBadge } from '../../components/article-status-badge';
import { ArticleThumbnail } from '../../components/article-thumbnail';
import { Button, EditIcon, Font } from '@system/figa-ui';
import { ArticleDetails } from '../../components/article-details';
import { article_actions } from '../../store/article';
import { auth_selectors } from '../../store/auth';
import { useLang } from '../../dk';
import { Bar } from '../../components/bar';
import { ArticleTags } from '../../components/article-tags';

const ArticleView = ({
  mdx,
  url,
  thumbnailUrl,
  title,
  description,
  authorName,
  status,
  tags,
}: ArticleViewProps) => {
  const lang = useLang();
  const isAuthor = auth_selectors.useIsAuthor(authorName);

  useEffect(() => {
    return () => article_actions.reset();
  }, []);

  return (
    <>
      <MainLayout offPadding>
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
          info={<Font variant="b2">4.5 | 15m | 18/Jan/22</Font>}
          meta={<ArticleTags tags={tags} />}
          badge={<ArticleStatusBadge status={status} />}
          body={
            <PageWrapper>
              <MDXRemote {...mdx} />
            </PageWrapper>
          }
        />
      </MainLayout>
      <Bar>
        {isAuthor && (
          <Link href={`/${lang}/articles-creator?url=${url}`}>
            <Button size={2} shape="rounded">
              <EditIcon />
            </Button>
          </Link>
        )}
      </Bar>
    </>
  );
};

export { ArticleView };
