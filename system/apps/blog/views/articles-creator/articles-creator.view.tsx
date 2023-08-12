import { useArticleStore } from '../../store/article';
import { LoaderScreen } from './loader-screen';
import { InitialScreen } from './initial-screen';
import { EditorScreen } from './editor-screen';

const ArticlesCreatorView = () => {
  const state = useArticleStore()

  if (state.is === 'idle') return <InitialScreen />
  if (state.is === 'loading') return <LoaderScreen />
  if (state.is === 'loaded') return <EditorScreen />

  return (
    <div>error</div>
  )
};

export { ArticlesCreatorView };
