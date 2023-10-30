import {
  Avatar,
  Box,
  Button,
  CloseIcon,
  Field,
  Font,
  Loader,
  Textarea,
  column,
  row,
  tokens,
} from '@system/figa-ui';
import { useArticleReviewsStore } from '../../store/article-reviews';
import styled from 'styled-components';
import { InfoSection } from '../info-section';
import type { ArticleReviewsListProps } from './defs';
import { AdminsOnly } from '../../core';
import {
  add_article_review_actions,
  useAddArticleReviewStore,
} from '../../store/add-article-review';
import { article_management_actions } from '../../store/article-management';
import { article_selectors, useArticleStore } from '../../store/article';

const Container = styled.ul`
  ${column()}
  overflow-y: auto;

  & > *:not(:last-child) {
    margin-bottom: ${tokens.spacing[100]};
  }

  .review-list-item {
    & > div {
      ${row()}

      & > div {
        ${column()}
        margin-left: ${tokens.spacing[150]};
      }
    }
  }
`;

const ArticleReviewsList = ({ onClose }: ArticleReviewsListProps) => {
  const article = article_selectors.useArticle();
  const articleReviewsStore = useArticleReviewsStore();
  const addArticleReviewStore = useAddArticleReviewStore();

  if (articleReviewsStore.is === 'idle' || articleReviewsStore.is === 'busy')
    return (
      <Box margin="auto">
        <Loader />
      </Box>
    );

  if (articleReviewsStore.is === 'fail')
    return (
      <InfoSection
        padding={[0, 0, 0, 0]}
        title="❌ Ups... Something went wrong!"
        description="Try again with button below or refresh page if problem occurs 🔃."
        footer={<Button onClick={() => window.location.reload()}>Retry</Button>}
      />
    );

  const AddReviewSection = article.status === 'WaitingForApproval' && (
    <AdminsOnly>
      <Box spacing={[250]}>
        <Field
          label="Review*"
          hint="Remember to make review understable for readers"
        >
          <Textarea
            value={addArticleReviewStore.form.values.content}
            onChange={(e) =>
              add_article_review_actions.setField('content', e.target.value)
            }
          />
        </Field>
        <Button
          onClick={() => article_management_actions.confirm(article.id)}
          loading={addArticleReviewStore.is === 'busy'}
          size={2}
        >
          Comment
        </Button>
      </Box>
    </AdminsOnly>
  );

  return (
    <Box spacing={[200]}>
      <Box orientation="row" between>
        <Font variant="h6">
          Reviews {`(${articleReviewsStore.reviews.length})`}
        </Font>
        <Button
          size={1}
          shape="rounded"
          variant="outlined"
          motive="tertiary"
          onClick={onClose}
        >
          <CloseIcon />
        </Button>
      </Box>
      {articleReviewsStore.reviews.length > 0 ? (
        <Container className="reviews-list">
          {articleReviewsStore.reviews.map(
            ({ id, reviewerName, createdDate }) => (
              <li className="review-list-item" key={id}>
                <div>
                  <Avatar
                    alt={reviewerName}
                    src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg"
                  />
                  <div>
                    <Font variant="b3">{createdDate}</Font>
                    <Font variant="b2">{reviewerName}</Font>
                    {/* @TODO: Ask backend for content model and author avatar src. */}
                    <Font variant="b1">Some content</Font>
                  </div>
                </div>
              </li>
            )
          )}
          {AddReviewSection}
        </Container>
      ) : (
        <Box spacing={[200]}>
          <Font variant="b2">No reviews added yet</Font>
          {AddReviewSection}
        </Box>
      )}
    </Box>
  );
};

export { ArticleReviewsList };
