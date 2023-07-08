import { create } from 'zustand';
import type { ArticlesCreatorStore } from './defs';
import { createArticle, getError } from '@system/blog-api';

const useArticlesCreatorStore = create<ArticlesCreatorStore>((set, get) => ({
  key: 'idle',
  submitKey: 'idle',
  content: '',
  title: '',
  description: '',
  url: '',
  thumbnail: {
    file: null,
    preview: [],
  },
  lang: null,
  submitResponse: null,
  load: async (content) => {
    set({ key: 'loading', content });

    await new Promise(() => {
      setTimeout(() => {
        set({ key: 'loaded' });
      }, 1000);
    });
  },
  setField: (key, value) => {
    if (key === 'title') {
      set({ url: (value as string).replace(/ /g, '/').toLowerCase() });
    }

    set({ [key]: value });
  },
  submit: async () => {
    set({ submitKey: 'pending' });

    try {
      const { title, url, description, content, lang, thumbnail } = get();

      await createArticle({
        title,
        url,
        description,
        content,
        lang,
        thumbnail: thumbnail.file,
      });

      set({ submitKey: 'done' });
    } catch (error: unknown) {
      set({ submitKey: 'error', submitResponse: getError(error) });
    }
  },
}));

const reset = () => {
  useArticlesCreatorStore.setState({ key: 'idle' });
};

export { useArticlesCreatorStore, reset };
