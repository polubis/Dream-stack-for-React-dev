import styled from 'styled-components';
import { useArticleReviewsStore } from '../../store/article-reviews';
import {
  Alert,
  Avatar,
  Font,
  Loader,
  column,
  row,
  tokens,
} from '@system/figa-ui';

const Container = styled.section`
  ${column()}

  & > *:first-child {
    margin-bottom: ${tokens.spacing[200]};
  }

  & > ul {
    ${column()}

    & > li {
      & > div {
        ${row()}

        & > div {
          ${column()}
          margin-left: ${tokens.spacing[150]};
        }
      }
    }
  }
`;

const ArticleReviews = () => {
  const store = useArticleReviewsStore();
  const { is } = store;

  return (
    <Container>
      {(is == 'idle' || is === 'busy') && <Loader />}

      {is === 'ok' && (
        <ul>
          {store.reviews.map(({ id, reviewerName, createdDate }) => (
            <li key={id}>
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
        </ul>
      )}

      {is === 'fail' && <Alert type="error">{store.error.message}</Alert>}
    </Container>
  );
};

export { ArticleReviews };
