import {
  Avatar,
  Box,
  Button,
  CloseIcon,
  Field,
  Font,
  Loader,
  Popover,
  ReviewsIcon,
  Textarea,
  column,
  row,
  tokens,
} from '@system/figa-ui';
import { AdminsOnly } from '../../core';
import { useArticleParams } from '../../core/articles';
import {
  add_article_review_actions,
  useAddArticleReviewStore,
} from '../../store/add-article-review';
import { article_selectors } from '../../store/article';
import { article_management_actions } from '../../store/article-management';
import {
  article_reviews_actions,
  useArticleReviewsStore,
} from '../../store/article-reviews';
import { InfoSection } from '../info-section';
import styled from 'styled-components';
import { auth_selectors } from '../../store/auth';

const Container = styled.ul`
  ${column()}

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

const Trigger = ({ id }: { id: string }) => {
  const { toggle } = Popover.use();

  const articleReviewsStore = useArticleReviewsStore();

  return (
    <Popover.Trigger>
      <Button
        size={2}
        title="Reviews"
        loading={articleReviewsStore.is === 'busy'}
        shape="rounded"
        onClick={async () => {
          if (articleReviewsStore.is === 'ok') {
            toggle();
            return;
          }

          await article_reviews_actions.load(id);
          toggle();
        }}
      >
        <ReviewsIcon />
      </Button>
    </Popover.Trigger>
  );
};

const Content = () => {
  const { close } = Popover.use();

  const article = article_selectors.useArticle();
  const articleReviewsStore = useArticleReviewsStore();
  const addArticleReviewStore = useAddArticleReviewStore();

  const AddReviewSection = article.status === 'WaitingForApproval' && (
    <AdminsOnly>
      <Box spacing={[250]}>
        <Field
          label="Review*"
          placeholder="Add your review..."
          hint="Remember to make review understable for readers"
        >
          <Textarea
            invalid={
              addArticleReviewStore.form.touched &&
              addArticleReviewStore.form.result.content
            }
            value={addArticleReviewStore.form.values.content}
            onChange={(e) =>
              add_article_review_actions.setField('content', e.target.value)
            }
          />
        </Field>
        <Button
          onClick={() => article_management_actions.confirm(article.id)}
          disabled={
            addArticleReviewStore.form.untouched ||
            addArticleReviewStore.form.invalid
          }
          loading={addArticleReviewStore.is === 'busy'}
          size={2}
        >
          Comment
        </Button>
      </Box>
    </AdminsOnly>
  );

  return (
    <Popover.Content variant="outlined" minWidth="280px" maxWidth="500px">
      {(articleReviewsStore.is === 'idle' ||
        articleReviewsStore.is === 'busy') && (
        <Box margin="auto">
          <Loader />
        </Box>
      )}

      {articleReviewsStore.is === 'fail' && (
        <InfoSection
          padding={[0, 0, 0, 0]}
          title="❌ Ups... Something went wrong!"
          description="Try again with button below or refresh page if problem occurs 🔃."
          footer={
            <Button onClick={() => window.location.reload()}>Retry</Button>
          }
        />
      )}
      {articleReviewsStore.is === 'ok' && (
        <Box spacing={[200]} padding={[200, 200, 200, 200]}>
          <Box orientation="row" between>
            <Font variant="h6">
              Reviews {`(${articleReviewsStore.reviews.length})`}
            </Font>
            <Button
              size={1}
              shape="rounded"
              variant="outlined"
              motive="tertiary"
              onClick={close}
            >
              <CloseIcon />
            </Button>
          </Box>
          {articleReviewsStore.reviews.length > 0 ? (
            <Box spacing={[200]}>
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
              </Container>
              {AddReviewSection}
            </Box>
          ) : (
            <Box spacing={[200]}>
              <Font variant="b2">No reviews added yet</Font>
              {AddReviewSection}
            </Box>
          )}
        </Box>
      )}
    </Popover.Content>
  );
};

const ArticleReviewsPopover = () => {
  const article = article_selectors.useArticle();
  const params = useArticleParams();
  const isAuthor = auth_selectors.useIsAuthor(article.authorName);
  const isAdmin = auth_selectors.useIsAdmin();

  if (params.is !== 'ok' || (!isAuthor && !isAdmin)) return null;

  return (
    <Popover closeMode="backdrop">
      <Trigger id={params.query.id} />
      <Content />
    </Popover>
  );
};

export { ArticleReviewsPopover };
