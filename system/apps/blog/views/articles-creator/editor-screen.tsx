import { Box, Button, CloseIcon, Code, Font } from '@system/figa-ui';
import {
  articles_creator_actions,
  useArticlesCreatorStore,
} from '../../store/articles-creator';
import { CreatorForm } from './creator-form';
import Markdown from 'markdown-to-jsx';
import { ArticleScreen } from '../../components';
import { ArticleStatusBadge } from '../../components/article-status-badge';
import { ArticleThumbnail } from '../../components/article-thumbnail';
import { ArticleDetails } from '../../components/article-details';
import { article_mdx_options } from '../../core';
import { EditorTabs } from './editor-tabs';
import { ArticleTags } from '../../components/article-tags';
import { CreatorLayout } from '../../components/creator-layout';

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
    <CreatorLayout>
      <Box minWidth="100%" orientation="row" between>
        <Font variant="h5">Article creator</Font>
        <Button
          size={2}
          shape="rounded"
          variant="outlined"
          motive="tertiary"
          onClick={handleClose}
        >
          <CloseIcon />
        </Button>
      </Box>
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
        info={<Font variant="b2">4.5 | 15m | 18/Jan/22</Font>}
        meta={<ArticleTags tags={tags} />}
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
      <Box minWidth="100%" orientation="row" right>
        <Button disabled={invalid} size={2} onClick={handleConfirm}>
          Submit
        </Button>
      </Box>
    </CreatorLayout>
  );
};

export { EditorScreen };
