import { create } from 'zustand';
import { ArticlesCreator } from './defs';
import { idle } from './states';

const useArticlesCreatorStore = create<ArticlesCreator.State>(idle);

export { useArticlesCreatorStore };
