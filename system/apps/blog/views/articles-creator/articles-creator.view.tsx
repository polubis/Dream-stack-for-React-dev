import { EditorScreen } from './editor-screen';
import { InitialScreen } from './initial-screen';
import { LoadingScreen } from './loading-screen';

const ArticlesCreatorView = () => {
  return (
    <>
      <InitialScreen />
      <LoadingScreen />
      <EditorScreen />
    </>
  )
};

export { ArticlesCreatorView };
