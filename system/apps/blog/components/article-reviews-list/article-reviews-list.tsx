import {
  Avatar,
  Box,
  Button,
  CloseIcon,
  Font,
  Loader,
  column,
  row,
  tokens,
} from '@system/figa-ui';
import { useArticleReviewsStore } from '../../store/article-reviews';
import styled from 'styled-components';
import { InfoSection } from '../info-section';
import type { ArticleReviewsListProps } from './defs';
import { AdminsOnly } from '../../core';

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
  const articleReviewsStore = useArticleReviewsStore();
  const { is } = articleReviewsStore;

  if (is === 'idle' || is === 'busy')
    return (
      <Box margin="auto">
        <Loader />
      </Box>
    );

  if (is === 'fail')
    return (
      <InfoSection
        padding={[0, 0, 0, 0]}
        title="❌ Ups... Something went wrong!"
        description="Try again with button below or refresh page if problem occurs 🔃."
        footer={<Button onClick={() => window.location.reload()}>Retry</Button>}
      />
    );

  const { reviews } = articleReviewsStore;

  const AddReviewButton = (
    <AdminsOnly>
      <Button size={2}>Add review</Button>
    </AdminsOnly>
  );

  return (
    <Box spacing={[200]}>
      <Box orientation="row" between>
        <Font variant="h6">Reviews {`(${reviews.length})`}</Font>
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
      {reviews.length > 0 ? (
        <Container className="reviews-list">
          {reviews.map(({ id, reviewerName, createdDate }) => (
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
          ))}
          {AddReviewButton}
        </Container>
      ) : (
        <Box spacing={[200]}>
          <Font variant="b2">No reviews added yet</Font>
          {AddReviewButton}
        </Box>
      )}
    </Box>
  );
};

export { ArticleReviewsList };
