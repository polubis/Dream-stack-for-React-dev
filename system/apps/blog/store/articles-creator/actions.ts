import { useArticlesCreatorStore } from './store';
import type { ArticlesCreator } from './defs';
import { creatorForm } from './form';
import {
  createArticle,
  getError,
  sendArticleForApproval,
  updateArticle,
} from '@system/blog-api';
import { Url } from '@system/blog-api-models';

const { getState: get, setState: set } = useArticlesCreatorStore;

const articles_creator_actions = {
  setView: (view: ArticlesCreator.View): void => {
    set({ view });
  },
  setForm: (values: Partial<ArticlesCreator.FormData> = {}): void => {
    set({
      form: creatorForm.init({
        ...get().form.values,
        ...values,
      }),
    });
  },
  change: <
    K extends keyof ArticlesCreator.FormData,
    V extends ArticlesCreator.FormData[K]
  >(
    key: K,
    value: V
  ): void => {
    set({
      form: creatorForm.set(get().form)({ [key]: value }),
    });
  },
  confirm: async (url?: Url): Promise<void> => {
    const state = get();

    set({
      is: 'busy',
      form: creatorForm.confirm(state.form),
    });

    try {
      const {
        form: {
          values: { title, thumbnail, description, content, lang },
        },
      } = state;

      const payload = {
        title,
        thumbnail: thumbnail.file,
        description,
        content,
        lang,
      };

      const { data } = await (url
        ? updateArticle({ url, ...payload })
        : createArticle(payload));

      if (state.form.values.sendToReview) {
        await sendArticleForApproval({ id: data.id });
      }

      set({ is: 'ok' });
    } catch (error: unknown) {
      set({ is: 'fail', error: getError(error) });
    }
  },
};

export { articles_creator_actions };
