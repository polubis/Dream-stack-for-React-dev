import { ArticlesTagsSelect } from '../../components/articles-tags-select';
import {
  live_articles_actions,
  live_articles_selectors,
} from '../../store/live-articles';

const TagsPopover = () => {
  const state = live_articles_selectors.useSafeState();

  return (
    <ArticlesTagsSelect
      tags={state.params.Tags}
      onConfirm={(Tags) => live_articles_actions.change({ Tags })}
    />
  );
};

export { TagsPopover };
