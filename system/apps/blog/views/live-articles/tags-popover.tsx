import { useMemo } from 'react';
import { useLiveArticlesRouter } from './use-live-articles-router';
import { ArticlesTagsSelect } from '../../components/articles-tags-select';
import { useSearchParams } from 'next/navigation';

const TagsPopover = () => {
  const searchParams = useSearchParams();
  const { go, getParams } = useLiveArticlesRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const params = useMemo(() => getParams(), [searchParams, getParams]);

  return (
    <ArticlesTagsSelect
      tags={params.Tags}
      onConfirm={(Tags) => {
        go(() => ({
          Tags,
          CurrentPage: 1,
        }));
      }}
    />
  );
};

export { TagsPopover };
