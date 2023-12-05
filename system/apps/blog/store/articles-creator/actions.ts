import { useArticlesCreatorStore } from './store';
import type { ArticlesCreatorStore } from './defs';
import { creatorForm } from './form';
import {
  createArticle,
  getError,
  sendArticleForApproval,
  updateArticle,
} from '@system/blog-api';
import { articles_creator_store_states } from './states';

const { getState: get, setState: set } = useArticlesCreatorStore;

const articles_creator_store_actions: ArticlesCreatorStore.Actions = {
  reset: () => {
    set(articles_creator_store_states.idle());
  },
  setView: (view) => {
    set({ view });
  },
  setForm: (values = {}) => {
    set({
      form: creatorForm.init({
        ...get().form.values,
        ...values,
      }),
    });
  },
  change: (key, value) => {
    set({
      form: creatorForm.set(get().form)({ [key]: value }),
    });
  },
  confirm: async (url) => {
    const state = get();

    set({
      is: 'busy',
      form: creatorForm.confirm(state.form),
    });

    try {
      const {
        form: {
          values: { title, thumbnail, description, content, lang, tags },
        },
      } = state;

      const payload = {
        title,
        thumbnail: thumbnail.file,
        description,
        content,
        lang,
        tags,
      };

      const { data } = await (url
        ? updateArticle({ url, ...payload })
        : createArticle(payload));

      if (state.form.values.sendToReview) {
        await sendArticleForApproval({ id: data.id });
      }

      set({ is: 'ok', data });
    } catch (error: unknown) {
      set({ is: 'fail', error: getError(error) });
    }
  },
};

export { articles_creator_store_actions };
