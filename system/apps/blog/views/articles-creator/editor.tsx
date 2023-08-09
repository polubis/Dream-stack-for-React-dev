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
import { ArticleMdRenderer } from '../../features/articles-creator';
import { useArticlesCreatorStore, reset } from '../../store/articles-creator';
import { ARTICLE_COMPONENTS } from '../../core';
import { useToggle } from '@system/figa-hooks';
import { ArticleForm } from './article-form';

const Editor = () => {
  const form = useToggle();
  const { code, change } = useArticlesCreatorStore();

  return (
    <CreatorLayout
      navigation={() => (
        <Box orientation="row" between>
          <Font variant="h5">Article creator</Font>
          <Button size={1} shape="rounded" onClick={reset}>
            <CloseIcon />
          </Button>
        </Box>
      )}
      codeToolbox={({ view, expandBoth, expandCode, expandPreview }) => (
        <>
          {view === 'code' && (
            <Button size={1} shape="rounded" onClick={expandPreview}>
              <PageIcon />
            </Button>
          )}
          {view === 'code-full' && (
            <Button size={1} shape="rounded" onClick={expandBoth}>
              <FullScreenCloseIcon />
            </Button>
          )}
          {view === 'both' && (
            <Button size={1} shape="rounded" onClick={expandCode}>
              <FullScreenIcon />
            </Button>
          )}
          <Button
            size={1}
            shape="rounded"
            variant={form.isOpen ? 'filled' : 'outlined'}
            onClick={form.toggle}
          >
            <FormIcon />
          </Button>
        </>
      )}
      previewToolbox={({ view, expandBoth, expandPreview, expandCode }) => (
        <>
          {view === 'preview' && (
            <Button size={1} shape="rounded" onClick={expandCode}>
              <CodeIcon />
            </Button>
          )}
          {view === 'preview-full' && (
            <Button size={1} shape="rounded" onClick={expandBoth}>
              <FullScreenCloseIcon />
            </Button>
          )}
          {view === 'both' && (
            <Button size={1} shape="rounded" onClick={expandPreview}>
              <FullScreenIcon />
            </Button>
          )}
        </>
      )}
    >
      {form.isOpen ? <ArticleForm /> : <Code onChange={change}>{code}</Code>}
      <ArticleMdRenderer
        code={code}
        components={ARTICLE_COMPONENTS}
        thumbnail={null}
      />
    </CreatorLayout>
  );
};

export { Editor };
