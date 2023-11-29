import {
  AttachmentIcon,
  Box,
  Button,
  CheckIcon,
  CloseIcon,
  Code,
  CodeIcon,
  Divider,
  Font,
  ImageIcon,
  M_UP,
  OListIcon,
  SplitIcon,
  SplitLeftIcon,
  SplitRightIcon,
  UListIcon,
  isTDown,
  isTUp,
  row,
  streched,
  tokens,
} from '@system/figa-ui';
import {
  articles_creator_store_actions,
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
const footerHeight = tokens.spacing[1000];

const Container = styled.main`
  display: grid;
  height: 100vh;
  grid-template-rows: ${topbarHeight} 1fr ${footerHeight};

  .creator-layout-topbar,
  .creator-layout-footer {
    ${row()}
    padding: 0 ${tokens.spacing[250]};
  }

  .creator-layout-footer {
    gap: ${tokens.spacing[100]};
    overflow-x: auto;

    .editor-screen-confirm-btn {
      @media ${M_UP} {
        margin-left: auto;
      }
    }

    .divider {
      margin: 0 ${tokens.spacing[50]};
    }
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
      overflow-y: scroll;
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
    articles_creator_store_actions.setView('initial');
  };

  const changeView = (): void => {
    setView((view) => {
      if (isTUp(window.innerWidth)) {
        if (view === 'code') return 'preview';
        if (view === 'preview') return 'both';

        return 'code';
      }

      return view === 'code' ? 'preview' : 'code';
    });
  };

  const handleConfirm = (): void => {
    articles_creator_store_actions.setView('confirm');
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
          <Font variant="h6">Article creator</Font>
          <Button
            size={2}
            variant="ghost"
            motive="tertiary"
            shape="rounded"
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
                      lang="md"
                      onChange={(content) =>
                        articles_creator_store_actions.change(
                          'content',
                          content
                        )
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
        <Button size={2} variant="ghost" motive="tertiary" shape="rounded">
          h1
        </Button>
        <Button size={2} variant="ghost" motive="tertiary" shape="rounded">
          h2
        </Button>
        <Button size={2} variant="ghost" motive="tertiary" shape="rounded">
          h3
        </Button>
        <Button size={2} variant="ghost" motive="tertiary" shape="rounded">
          h4
        </Button>
        <Button size={2} variant="ghost" motive="tertiary" shape="rounded">
          h5
        </Button>
        <Button size={2} variant="ghost" motive="tertiary" shape="rounded">
          h6
        </Button>
        <Button size={2} variant="ghost" motive="tertiary" shape="rounded">
          B
        </Button>
        <Button size={2} variant="ghost" motive="tertiary" shape="rounded">
          I
        </Button>
        <Button size={2} variant="ghost" motive="tertiary" shape="rounded">
          A
        </Button>
        <Divider axis="y" />
        <Button size={2} variant="ghost" motive="tertiary" shape="rounded">
          <OListIcon />
        </Button>
        <Button size={2} variant="ghost" motive="tertiary" shape="rounded">
          <UListIcon />
        </Button>
        <Divider axis="y" />
        <Button size={2} variant="ghost" motive="tertiary" shape="rounded">
          <ImageIcon />
        </Button>
        <Button size={2} variant="ghost" motive="tertiary" shape="rounded">
          <CodeIcon />
        </Button>
        <Button size={2} variant="ghost" motive="tertiary" shape="rounded">
          <AttachmentIcon />
        </Button>
        <Divider axis="y" />
        <Button
          size={2}
          variant="ghost"
          motive="tertiary"
          shape="rounded"
          onClick={changeView}
        >
          {view === 'code' && <SplitLeftIcon />}
          {view === 'preview' && <SplitRightIcon />}
          {view === 'both' && <SplitIcon />}
        </Button>
        <Button
          disabled={invalid}
          size={2}
          shape="rounded"
          className="editor-screen-confirm-btn"
          title="Submit article"
          onClick={handleConfirm}
        >
          <CheckIcon />
        </Button>
      </footer>
    </Container>
  );
};

export { EditorScreen };
