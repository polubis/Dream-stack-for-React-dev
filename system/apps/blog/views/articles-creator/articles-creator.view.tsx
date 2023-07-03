import { Box, Loader } from '@system/figa-ui';
import { MainLayout } from '../../components';
import { ARTICLE_COMPONENTS } from '../../core';
import dynamic from 'next/dynamic';
import { useArticlesCreatorStore } from '../../store/articles-creator';
import { useEffect } from 'react';

const ArticlesCreatorFeature = dynamic(() =>
  import('../../features/articles-creator').then((m) => m.ArticlesCreator)
);

const MDX = `#### Hello, MDX!
  This is a **dynamic** MDX rendering example using Next.js.
  - List item 1
  - List item 2`;

const ArticlesCreatorView = () => {
  const { key, code, change, load } = useArticlesCreatorStore();

  useEffect(() => {
    load(MDX);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      {key === 'idle' && (
        <Box margin="auto">
          <Box margin="auto">
            <Loader size="big" />
          </Box>
        </Box>
      )}
      {key === 'loaded' && (
        <Box orientation="row">
          <ArticlesCreatorFeature
            components={ARTICLE_COMPONENTS}
            code={code}
            onChange={change}
          />
        </Box>
      )}
    </MainLayout>
  );
};

export { ArticlesCreatorView };
