import { useArticleParams } from '../../core/articles';
import { MainLayout } from '../../components';
import { FailScreen } from '../article-review/components/fail-screen';
import { useLang } from '../../dk';
import { article_actions, useArticleStore } from '../../store/article';
import { useEffect } from 'react';
import { Box, Loader } from '@system/figa-ui';

const ArticlePreviewView = () => {
  const lang = useLang();
  const articleStore = useArticleStore();
  const params = useArticleParams();

  useEffect(() => {
    if (params.is === 'ok') {
      article_actions.load({ url: params.query.url, lang });
    }
  }, [lang, params]);

  return (
    <MainLayout offPadding sticky>
      {(articleStore.is === 'idle' ||
        params.is === 'busy' ||
        articleStore.is === 'busy') && (
        <Box center orientation="row">
          <Loader size="big" />
        </Box>
      )}
      {(params.is === 'fail' || articleStore.is === 'fail') && (
        <FailScreen onRetry={() => window.location.reload()} />
      )}
      {/* {params.is === 'ok' && <Content {...params.query} />} */}
    </MainLayout>
  );
};

export { ArticlePreviewView };
