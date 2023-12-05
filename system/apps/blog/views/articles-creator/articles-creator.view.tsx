import { InitialScreen } from './initial-screen';
import { EditorScreen } from './editor-screen';
import { useArticlesCreatorStore } from '../../store/articles-creator';
import { ConfirmScreen } from './confirm-screen';
import { MainLayout } from '../../components';

const ArticlesCreatorView = () => {
  const articleCreatorState = useArticlesCreatorStore();

  if (articleCreatorState.view === 'initial')
    return (
      <MainLayout>
        <InitialScreen />
      </MainLayout>
    );

  if (articleCreatorState.view === 'confirm')
    return (
      <MainLayout>
        <ConfirmScreen />
      </MainLayout>
    );

  return <EditorScreen />;
};

export { ArticlesCreatorView };
