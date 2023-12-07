import { ArticlesTagsSelect } from '../../components/articles-tags-select';
import {
  articles_store_actions,
  articles_store_selectors,
} from '../../store/articles';

const TagsPopover = () => {
  const state = articles_store_selectors.useSafeState();

  return (
    <ArticlesTagsSelect
      tags={state.params.Tags}
      onConfirm={(Tags) => articles_store_actions.change({ Tags })}
    />
  );
};

export { TagsPopover };
