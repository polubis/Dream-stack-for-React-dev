import { useStoreSync } from '../../store/use-store-sync';
import { ArticleScreen } from '../../components/article-screen';
import Markdown from 'markdown-to-jsx';
import { useArticleStore } from '../../store/article';

const ArticlePreviewView = () => {
  useStoreSync(useArticleStore, { is: 'idle' })();

  return (
    <ArticleScreen
      dynamic
      body={(options, content) => (
        <Markdown options={options}>{content}</Markdown>
      )}
    />
  );
};

export { ArticlePreviewView };
