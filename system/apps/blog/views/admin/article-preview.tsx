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
  column,
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
import { useChangeArticleStatusStore } from '../../store/change-article-status';
import { ArticleStatus } from '@system/blog-api-models';

const ReviewsSection = styled.section`
  position: relative;

  .content {
    ${column()}
    position: sticky;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;

    .top {
      ${row()}
      justify-content: space-between;
    }

    form {
      margin-bottom: ${tokens.spacing[500]};

      .field {
        margin-bottom: ${tokens.spacing[200]};
      }
    }

    footer {
      ${row()}
      margin-top: auto;
      justify-content: flex-end;

      & > *:not(:first-child) {
        margin-left: ${tokens.spacing[200]};
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
  const articleStore = useArticleStore();

  const { is } = articleStore;

  if (is === 'idle' || is === 'busy') {
    return <Loader />;
  }

  if (is === 'fail')
    return <Alert type="error">{articleStore.error.message}</Alert>;

  const { title, description, authorName, thumbnailUrl, status, content } =
    articleStore.article;

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
  const articleStore = useArticleStore();
  const addArticleReviewStore = useAddArticleReviewStore();
  const changeArticleStatusStore = useChangeArticleStatusStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    article_management_actions.confirm(
      article_management_selectors.active().id
    );
  };

  const handleStatusChangeClick = (status: ArticleStatus) => (): void => {
    article_management_actions.changeStatus(
      article_management_selectors.active().id,
      status
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
          <footer>
            {articleStore.is === 'ok' && (
              <>
                {articleStore.article.status !== 'NeedWork' && (
                  <Button
                    onClick={handleStatusChangeClick('NeedWork')}
                    loading={changeArticleStatusStore.is === 'busy'}
                  >
                    Request improvements
                  </Button>
                )}
                {articleStore.article.status !== 'Accepted' && (
                  <Button
                    onClick={handleStatusChangeClick('Accepted')}
                    loading={changeArticleStatusStore.is === 'busy'}
                  >
                    Publish article
                  </Button>
                )}
              </>
            )}
          </footer>
        </div>
      </ReviewsSection>
    </Container>
  );
};

export { ArticlePreview };
