import { useArticlesCreatorStore } from '../../store/articles-creator';
import { EditorScreen } from './editor-screen';
import { InitialScreen } from './initial-screen';
import { LoadingScreen } from './loading-screen';

const ArticlesCreatorView = () => {
  const state = useArticlesCreatorStore();

  if (state.is === 'idle') return <InitialScreen />;
  if (state.is === 'loading') return <LoadingScreen />;
  if (
    state.is === 'load-fail' ||
    state.is === 'create-fail' ||
    state.is === 'edit-fail'
  )
    return <div>Smth wrong</div>;

  return <EditorScreen {...state} />;
};

export { ArticlesCreatorView };
