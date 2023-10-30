import styled from 'styled-components';
import { ArticleScreen } from '../../../components';
import { ArticleDetails } from '../../../components/article-details';
import { ArticleThumbnail } from '../../../components/article-thumbnail';
import { Alert, Font, column, tokens } from '@system/figa-ui';
import { ArticleStatusBadge } from '../../../components/article-status-badge';
import Markdown from 'markdown-to-jsx';
import { article_mdx_options } from '../../../core';
import { article_selectors } from '../../../store/article';
import { ArticleTags } from '../../../components/article-tags';

const Container = styled.div`
  ${column()}

  .review-screen-alert {
    margin-bottom: ${tokens.spacing[200]};
  }

  .review-screen-toolbox {
    margin-bottom: ${tokens.spacing[250]};

    & > *:not(:first-child) {
      margin-left: ${tokens.spacing[200]};
    }
  }

  .review-screen-reviews {
    margin-bottom: ${tokens.spacing[250]};
  }

  .review-screen-article {
    background: #0a0a0a;
    border: ${tokens.spacing[25]} solid ${tokens.gray[300]};
    border-radius: ${tokens.radius[50]};

    .article-screen {
      max-width: 100%;

      .article-thumbnail {
        border-radius: 0;
      }
    }
  }
`;

const ReviewScreen = () => {
  const {
    title,
    description,
    authorName,
    thumbnailUrl,
    status,
    content,
    tags,
  } = article_selectors.useArticle();

  if (status === 'Accepted') {
    return (
      <Container>
        <Alert className="review-screen-alert" type="ok">
          The article is live. You may leave this page 👌.
        </Alert>
      </Container>
    );
  }

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

export { ReviewScreen };
