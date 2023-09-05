import { MDXRemote } from 'next-mdx-remote';
import { ArticleScreen, MainLayout, PageWrapper } from '../../components';
import type { ArticleViewProps } from './defs';
import { ArticleStatusBadge } from '../../components/article-status-badge';
import { ArticleThumbnail } from '../../components/article-thumbnail';
import { ArticleMeta } from '../../components/article-meta';
import { Font } from '@system/figa-ui';
import { ArticleDetails } from '../../components/article-details';

const ArticleView = ({
  mdx,
  thumbnailUrl,
  title,
  description,
  authorName,
  status,
}: ArticleViewProps) => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export { ArticleView };
