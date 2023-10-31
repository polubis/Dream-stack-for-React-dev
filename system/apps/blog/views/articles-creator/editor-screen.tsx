import {
  Box,
  Button,
  CloseIcon,
  Code,
  Font,
  isTDown,
  row,
  streched,
  tokens,
} from '@system/figa-ui';
import {
  articles_creator_actions,
  useArticlesCreatorStore,
} from '../../store/articles-creator';
import { CreatorForm } from './creator-form';
import Markdown from 'markdown-to-jsx';
import { ArticleBody } from '../../components/article-body';
import { ArticleStatusBadge } from '../../components/article-status-badge';
import { ArticleThumbnail } from '../../components/article-thumbnail';
import { ArticleDetails } from '../../components/article-details';
import { article_mdx_options } from '../../core';
import { EditorTabs } from './editor-tabs';
import { ArticleTags } from '../../components/article-tags';
import styled from 'styled-components';
import { useElementSize } from '@system/figa-hooks';
import { useEffect, useState } from 'react';
import { useArticleStore } from '../../store/article';
import type { ArticleStatus } from '@system/blog-api-models';
import type { EditorScreenView } from './defs';

const topbarHeight = tokens.spacing[850];
const footerHeight = tokens.spacing[850];

const Container = styled.main`
  display: grid;
  height: 100vh;
  grid-template-rows: ${topbarHeight} 1fr ${footerHeight};

  .creator-layout-topbar,
  .creator-layout-footer {
    ${row()}
    padding: ${tokens.spacing[200]};
  }

  .creator-layout-content {
    position: relative;
    border-top: ${tokens.spacing[25]} solid
      ${(props) => props.theme.nav.borderColor};
    border-bottom: ${tokens.spacing[25]} solid
      ${(props) => props.theme.nav.borderColor};

    .creator-layout-content-container {
      ${streched('absolute')}
      display: grid;
      grid-template-columns: 1fr;
    }

    .creator-layout-code,
    .creator-layout-preview {
      overflow-y: auto;
    }
  }

  &.preview {
    .creator-layout-code {
      display: none;
    }
  }

  &.code {
    .creator-layout-preview {
      display: none;
    }
  }

  &.both {
    .creator-layout-content-container {
      grid-template-columns: 50% 50%;
    }
  }
`;

const EditorScreen = () => {
  const articleStore = useArticleStore();
  const articlesCreatorStore = useArticlesCreatorStore();
  const [size] = useElementSize({ delay: 20 });
  const [view, setView] = useState<EditorScreenView>('both');

  useEffect(() => {
    if (size.status === 'undetected') return;

    setView(isTDown(size.width) ? 'code' : 'both');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  const handleClose = (): void => {
    articles_creator_actions.setView('initial');
  };

  const toggleView = (): void => {
    setView((view) => (view === 'code' ? 'preview' : 'code'));
  };

  const handleConfirm = (): void => {
    articles_creator_actions.setView('confirm');
  };

  const {
    form: {
      values: { thumbnail, title, description, content, tags },
      invalid,
    },
  } = articlesCreatorStore;

  const status: ArticleStatus =
    articleStore.is === 'ok' ? articleStore.article.status : 'Draft';

  return (
    <Container className={view}>
      <header className="creator-layout-topbar">
        <Box minWidth="100%" orientation="row" between>
          <Font variant="h5">Article creator</Font>
          <Button
            size={2}
            shape="rounded"
            variant="outlined"
            motive="tertiary"
            title="Close creator"
            onClick={handleClose}
          >
            <CloseIcon />
          </Button>
        </Box>
      </header>
      <main className="creator-layout-content">
        <div className="creator-layout-content-container">
          <section className="creator-layout-code">
            <EditorTabs>
              {(activeTab) => (
                <>
                  {activeTab === 'Content' && (
                    <Code
                      onChange={(content) =>
                        articles_creator_actions.change('content', content)
                      }
                    >
                      {content}
                    </Code>
                  )}
                  {activeTab === 'Metadata' && <CreatorForm />}
                </>
              )}
            </EditorTabs>
          </section>
          <section className="creator-layout-preview">
            <ArticleBody
              details={
                <ArticleDetails
                  title={title}
                  description={description}
                  authorName="You"
                />
              }
              info={<Font variant="b2">4.5 | 15m | 18/Jan/22</Font>}
              meta={<ArticleTags tags={tags} />}
              thumbnail={
                thumbnail.preview[0] && (
                  <ArticleThumbnail
                    src={thumbnail.preview[0]}
                    title={title}
                    status={status}
                  />
                )
              }
              badge={<ArticleStatusBadge status={status} />}
              body={
                <Markdown key={content} options={article_mdx_options}>
                  {content}
                </Markdown>
              }
            />
          </section>
        </div>
      </main>
      <footer className="creator-layout-footer">
        <Box minWidth="100%" orientation="row" right spacing={[150]}>
          {view !== 'both' && (
            <Button
              size={2}
              variant="outlined"
              motive="tertiary"
              onClick={toggleView}
            >
              {view === 'code' ? 'Preview' : 'Content'}
            </Button>
          )}

          <Button disabled={invalid} size={2} onClick={handleConfirm}>
            Submit
          </Button>
        </Box>
      </footer>
    </Container>
  );
};

export { EditorScreen };
