import type { DeleteArticleStore } from './defs';
import { useDeleteArticleStore } from './store';

const isSafeState = (
  state: DeleteArticleStore.State
): DeleteArticleStore.Ok => {
  if (state.is === 'ok') return state;

  throw Error(
    `The read attempt detected in DeleteArticleStore, the state is: ${state.is}`
  );
};

const delete_article_store_selectors: DeleteArticleStore.Selectors = {
  useState: () => useDeleteArticleStore(),
  state: useDeleteArticleStore.getState,
  safeState: () => isSafeState(useDeleteArticleStore.getState()),
  useSafeState: () => useDeleteArticleStore(isSafeState),
};

export { delete_article_store_selectors };
