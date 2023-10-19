import {
  Box,
  Button,
  Code,
  CodeIcon,
  CreatorLayout,
  Font,
  FullScreenCloseIcon,
  FullScreenIcon,
  PageIcon,
} from '@system/figa-ui';
import {
  articles_creator_actions,
  useArticlesCreatorStore,
} from '../../store/articles-creator';
import { CreatorForm } from './creator-form';
import Markdown from 'markdown-to-jsx';
import { ArticleScreen } from '../../components';
import { ArticleStatusBadge } from '../../components/article-status-badge';
import { ArticleThumbnail } from '../../components/article-thumbnail';
import { ArticleMeta } from '../../components/article-meta';
import { ArticleDetails } from '../../components/article-details';
import { article_mdx_options } from '../../core';
import { EditorTabs } from './editor-tabs';

const EditorScreen = () => {
  const articlesCreatorStore = useArticlesCreatorStore();

  const handleClose = (): void => {
    articles_creator_actions.setView('initial');
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

  return (
    <CreatorLayout
      navigation={() => (
        <Box orientation="row" between>
          <Font variant="h5">Article creator</Font>
          <Box orientation="row" spacing={[200]}>
            <Button
              variant="outlined"
              motive="tertiary"
              size={2}
              onClick={handleClose}
            >
              Back
            </Button>
            <Button disabled={invalid} size={2} onClick={handleConfirm}>
              Submit
            </Button>
          </Box>
        </Box>
      )}
      codeToolbox={({ view, expandBoth, expandCode, expandPreview }) => (
        <>
          {view === 'code' && (
            <Button
              size={1}
              shape="rounded"
              title="Open preview fullscreen"
              onClick={expandPreview}
            >
              <PageIcon />
            </Button>
          )}
          {view === 'code-full' && (
            <Button
              size={1}
              shape="rounded"
              title="Exit code fullscreen"
              onClick={expandBoth}
            >
              <FullScreenCloseIcon />
            </Button>
          )}
          {view === 'both' && (
            <Button
              size={1}
              shape="rounded"
              title="Code fullscreen"
              onClick={expandCode}
            >
              <FullScreenIcon />
            </Button>
          )}
        </>
      )}
      previewToolbox={({ view, expandBoth, expandPreview, expandCode }) => (
        <>
          {view === 'preview' && (
            <Button
              size={1}
              shape="rounded"
              title="Code fullscreen"
              onClick={expandCode}
            >
              <CodeIcon />
            </Button>
          )}
          {view === 'preview-full' && (
            <Button
              size={1}
              shape="rounded"
              title="Exit preview fullscreen"
              onClick={expandBoth}
            >
              <FullScreenCloseIcon />
            </Button>
          )}
          {view === 'both' && (
            <Button
              size={1}
              shape="rounded"
              title="Preview fullscreen"
              onClick={expandPreview}
            >
              <FullScreenIcon />
            </Button>
          )}
        </>
      )}
    >
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
      <ArticleScreen
        details={
          <ArticleDetails
            title={title}
            description={description}
            authorName="You"
          />
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
            <Font variant="b2">{tags.join(', ')}</Font>
          </ArticleMeta>
        }
        thumbnail={
          thumbnail.preview[0] ? (
            <ArticleThumbnail
              src={thumbnail.preview[0]}
              title={title}
              status="Draft"
            />
          ) : (
            <Box padding={[400, 400, 400, 400]} variant="filled">
              <Font variant="h4">No thumbnail added yet...</Font>
            </Box>
          )
        }
        badge={<ArticleStatusBadge status="Draft" />}
        body={
          <Markdown key={content} options={article_mdx_options}>
            {content}
          </Markdown>
        }
      />
    </CreatorLayout>
  );
};

export { EditorScreen };
