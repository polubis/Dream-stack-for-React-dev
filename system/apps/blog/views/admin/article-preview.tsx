import { ArticleScreen } from '../../components';
import styled from 'styled-components';
import { ArticleDetails } from '../../components/article-details';
import { ArticleThumbnail } from '../../components/article-thumbnail';
import { ArticleMeta } from '../../components/article-meta';
import {
  Alert,
  Button,
  CloseIcon,
  Field,
  Font,
  Loader,
  Textarea,
  row,
  tokens,
} from '@system/figa-ui';
import { ArticleStatusBadge } from '../../components/article-status-badge';
import { ArticleReviews } from '../../components/article-reviews';
import { useArticleStore } from '../../store/article';
import Markdown from 'markdown-to-jsx';
import { article_mdx_options } from '../../core';
import {
  add_article_review_actions,
  useAddArticleReviewStore,
} from '../../store/add-article-review';
import type { FormEvent } from 'react';
import {
  article_management_actions,
  article_management_selectors,
} from '../../store/article-management';

const ReviewsSection = styled.section`
  position: relative;

  .content {
    position: sticky;
    top: 0;
    right: 0;
    width: 100%;

    .top {
      ${row()}
      justify-content: space-between;
    }

    form {
      .field {
        margin-bottom: ${tokens.spacing[200]};
      }
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 40%;
  position: relative;
  gap: ${tokens.spacing[200]};
`;

const DetailsSection = () => {
  const store = useArticleStore();

  const { is } = store;

  if (is === 'idle' || is === 'busy') {
    return <Loader />;
  }

  if (is === 'fail') return <Alert type="error">{store.error.message}</Alert>;

  const { title, description, authorName, thumbnailUrl, status, content } =
    store.article;

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
      body={<Markdown options={article_mdx_options}>{content}</Markdown>}
    />
  );
};

const ArticlePreview = () => {
  const addArticleReviewStore = useAddArticleReviewStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    article_management_actions.confirm(
      article_management_selectors.active().id
    );
  };

  return (
    <Container>
      <DetailsSection />
      <ReviewsSection>
        <div className="content">
          <div className="top">
            <Font variant="h6">Reviews</Font>
            <Button
              size={2}
              shape="rounded"
              onClick={article_management_actions.reset}
            >
              <CloseIcon />
            </Button>
          </div>
          <ArticleReviews />
          <form onSubmit={handleSubmit}>
            <Field label="Review content*">
              <Textarea
                placeholder="Add your review..."
                value={addArticleReviewStore.form.values.content}
                onChange={(e) =>
                  add_article_review_actions.setField('content', e.target.value)
                }
              />
            </Field>
            <Button loading={addArticleReviewStore.is === 'busy'}>
              Confirm
            </Button>
          </form>
        </div>
      </ReviewsSection>
    </Container>
  );
};

export { ArticlePreview };
