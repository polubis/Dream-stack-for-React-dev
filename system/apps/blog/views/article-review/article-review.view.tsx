import { useStoreSync } from '../../store/use-store-sync';
import { ArticleScreen } from '../../components/article-screen';
import Markdown from 'markdown-to-jsx';
import { useArticleStore } from '../../store/article';

const ArticleReviewView = () => {
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

export { ArticleReviewView };
