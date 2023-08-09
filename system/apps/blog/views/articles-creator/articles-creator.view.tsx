import { useArticlesCreatorStore } from '../../store/articles-creator';
import { LandingScreen } from './landing-screen';
import { LoadingScreen } from './loader-screen';
import { Editor } from './editor';

const ArticlesCreatorView = () => {
  const { key } = useArticlesCreatorStore();

  if (key === 'idle') return <LandingScreen />
  if (key === 'loading') return <LoadingScreen />
  if (key === 'loaded') return <Editor />

  throw new Error('Lack of component support for this key ' + key);
};

export { ArticlesCreatorView };
