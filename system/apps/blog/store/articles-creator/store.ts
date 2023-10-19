import { create } from 'zustand';
import type { ArticlesCreator } from './defs';
import { creatorForm } from './form';

const useArticlesCreatorStore = create<ArticlesCreator.State>(() => ({
  is: 'idle',
  view: 'initial',
  form: creatorForm.init({
    title: '',
    description: '',
    tags: [],
    thumbnail: {
      file: null,
      preview: [],
    },
    content: '',
    lang: 'en',
    sendToReview: false,
  }),
}));

export { useArticlesCreatorStore };
