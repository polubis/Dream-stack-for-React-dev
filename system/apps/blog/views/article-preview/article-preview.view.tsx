import { useArticleParams } from '../../core/articles';
import { MainLayout } from '../../components';
import { FailScreen } from '../article-review/components/fail-screen';

const ArticlePreviewView = () => {
  const params = useArticleParams();

  return (
    <MainLayout offPadding sticky>
      {params.is === 'fail' && (
        <FailScreen onRetry={() => window.location.reload()} />
      )}
      {/* {params.is === 'ok' && <Content {...params.query} />} */}
    </MainLayout>
  );
};

export { ArticlePreviewView };
