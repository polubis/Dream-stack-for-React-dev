import {
  Box,
  Button,
  CloseIcon,
  Code,
  CodeIcon,
  CreatorLayout,
  Font,
  FormIcon,
  FullScreenCloseIcon,
  FullScreenIcon,
  PageIcon,
} from '@system/figa-ui';
import {
  articles_creator_actions,
  useArticlesCreatorStore,
} from '../../store/articles-creator';
import { useToggle } from '@system/figa-hooks';
import { CreatorForm } from './creator-form';
import Markdown from 'markdown-to-jsx';
import { ArticleScreen } from '../../components';
import { ArticleStatusBadge } from '../../components/article-status-badge';
import { ArticleThumbnail } from '../../components/article-thumbnail';
import { ArticleMeta } from '../../components/article-meta';
import { ArticleDetails } from '../../components/article-details';
import { article_mdx_options } from '../../core';

const EditorScreen = () => {
  const articlesCreatorStore = useArticlesCreatorStore();
  const form = useToggle();

  const handleClose = (): void => {
    articles_creator_actions.setView('initial');
  };

  const {
    form: {
      values: { thumbnail, title, description, content },
    },
  } = articlesCreatorStore;

  return (
    <CreatorLayout
      navigation={() => (
        <Box orientation="row" between>
          <Font variant="h5">Article creator</Font>
          <Button
            size={1}
            shape="rounded"
            title="Close editor"
            onClick={handleClose}
          >
            <CloseIcon />
          </Button>
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
          <Button
            size={1}
            shape="rounded"
            title={form.opened ? 'Close form' : 'Show form'}
            variant={form.opened ? 'filled' : 'outlined'}
            onClick={form.toggle}
          >
            <FormIcon />
          </Button>
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
      {form.opened ? (
        <CreatorForm />
      ) : (
        <Code
          onChange={(content) =>
            articles_creator_actions.change('content', content)
          }
        >
          {content}
        </Code>
      )}

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
            <Font variant="b2">React, Angular, JavaScript, TypeScript</Font>
            <Font variant="b2">Architecture, Design patterns</Font>
          </ArticleMeta>
        }
        thumbnail={
          <ArticleThumbnail
            src={thumbnail.preview[0]}
            title={title}
            status="Draft"
          />
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
