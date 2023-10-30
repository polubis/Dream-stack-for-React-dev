import { Avatar, Font, column, row, tokens } from '@system/figa-ui';
import { useArticleReviewsStore } from 'apps/blog/store/article-reviews';
import styled from 'styled-components';

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

const ArticleReviewsList = () => {
  const articleReviewsStore = useArticleReviewsStore();
  const { is } = articleReviewsStore;

  if (is !== 'ok') return null;

  const { reviews } = articleReviewsStore;

  return (
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
    </Container>
  );
};

export { ArticleReviewsList };
