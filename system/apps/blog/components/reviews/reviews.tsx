import styled from 'styled-components';
import {
  Avatar,
  Box,
  Button,
  Field,
  Font,
  Textarea,
  column,
  row,
  tokens,
} from '@system/figa-ui';
import { article_reviews_selectors } from '../../store/article-reviews';
import {
  add_article_review_actions,
  useAddArticleReviewStore,
} from 'apps/blog/store/add-article-review';
import { article_selectors } from 'apps/blog/store/article';
import { article_management_actions } from 'apps/blog/store/article-management';

const Container = styled.section`
  ${column()}

  & > *:first-child {
    margin-bottom: ${tokens.spacing[200]};
  }

  .reviews-list {
    ${column()}
    list-style: none;
    overflow-y: auto;
    max-height: ${tokens.spacing[4000]};

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
  }
`;

const Reviews = () => {
  const reviews = article_reviews_selectors.useReviews();
  const addArticleReviewStore = useAddArticleReviewStore();
  const article = article_selectors.useArticle();

  const handleConfirm = async (): Promise<void> => {
    await article_management_actions.confirm(article.id);
  };

  const { form, is } = addArticleReviewStore;

  return (
    <Container className="reviews">
      <Font variant="h5">Reviews {`(${reviews.length})`}</Font>
      <ul className="reviews-list">
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
      </ul>
      <Box spacing={[250]} margin={[450, 0, 0, 0]}>
        <Field
          label="Review*"
          hint="Remember to make review understable for readers..."
        >
          <Textarea
            value={form.values.content}
            onChange={(e) =>
              add_article_review_actions.setField('content', e.target.value)
            }
          />
        </Field>
        <Button onClick={handleConfirm} loading={is === 'busy'} size={2}>
          Confirm
        </Button>
      </Box>
    </Container>
  );
};

export { Reviews };
