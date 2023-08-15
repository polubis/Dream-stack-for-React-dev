import { InitialScreen } from './initial-screen';
import { EditorScreen } from './editor-screen';
import { useArticlesCreatorStore } from '../../store/articles-creator';
import { ConfirmScreen } from './confirm-screen';

const ArticlesCreatorView = () => {
  const articleCreatorState = useArticlesCreatorStore();

  if (articleCreatorState.view === 'initial') return <InitialScreen />;
  if (articleCreatorState.view === 'confirm') return <ConfirmScreen />;

  return <EditorScreen />;
};

export { ArticlesCreatorView };
