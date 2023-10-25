import styled from 'styled-components';
import { ArticleScreen } from '../../../components';
import { ArticleDetails } from '../../../components/article-details';
import { ArticleThumbnail } from '../../../components/article-thumbnail';
import {
  Alert,
  Box,
  Button,
  EditIcon,
  Font,
  column,
  tokens,
} from '@system/figa-ui';
import { ArticleStatusBadge } from '../../../components/article-status-badge';
import Markdown from 'markdown-to-jsx';
import { article_mdx_options } from '../../../core';
import { article_selectors } from '../../../store/article';
import { auth_selectors } from '../../../store/auth';
import { useToggle } from '@system/figa-hooks';
import { Reviews } from '../../../components/reviews';
import { article_reviews_selectors } from '../../../store/article-reviews';
import { EmptyReviews } from './empty-reviews';
import { ArticleActionsPopover } from '../../../components/article-actions-popover';
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
  const isAuthor = auth_selectors.useIsAuthor(authorName);
  const reviewSection = useToggle();
  const reviews = article_reviews_selectors.useReviews();

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
    <Container>
      <Box orientation="row" right className="review-screen-toolbox">
        {isAuthor && (
          <Button size={2} shape="rounded">
            <EditIcon />
          </Button>
        )}

        <Button size={2} onClick={reviewSection.toggle}>
          {reviewSection.opened
            ? 'Close'
            : reviews.length > 0
            ? `Reviews (${reviews.length})`
            : 'Reviews'}
        </Button>

        {status === 'WaitingForApproval' && <ArticleActionsPopover />}
      </Box>
      {reviewSection.opened && (
        <Box
          className="review-screen-reviews"
          padding={[250, 250, 250, 250]}
          variant="outlined"
        >
          {reviews.length === 0 ? <EmptyReviews /> : <Reviews />}
        </Box>
      )}
      <div className="review-screen-article">
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
          body={<Markdown options={article_mdx_options}>{content}</Markdown>}
        />
      </div>
    </Container>
  );
};

export { ReviewScreen };
