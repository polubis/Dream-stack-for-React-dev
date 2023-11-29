import { create } from 'zustand';
import type { ArticlesCreatorStore } from './defs';
import { creatorForm } from './form';

const useArticlesCreatorStore = create<ArticlesCreatorStore.State>(() => ({
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
