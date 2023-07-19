import { create } from 'zustand';
import type {
  ArticleMaintainFormData,
  ArticleMaintainStore,
  ArticleMaintainActions,
} from './defs';
import {
  createArticle,
  updateArticle,
  getArticle,
  getError,
} from '@system/blog-api';
import { form, required } from '@system/utils';

const maintainForm = form<ArticleMaintainFormData>()({
  title: [required],
  description: [],
  content: [],
  lang: [],
  thumbnail: [],
});

const useArticleMaintainStore = create<ArticleMaintainStore>(() => ({
  is: 'idle',
}));

const change: ArticleMaintainActions['change'] = (key, value) => {
  const get = useArticleMaintainStore.getState;
  const set = useArticleMaintainStore.setState;

  set({
    form: maintainForm.set(get().form)({ [key]: value }),
  });
};

const confirm: ArticleMaintainActions['confirm'] = async () => {
  const set = useArticleMaintainStore.setState;
  const get = useArticleMaintainStore.getState;

  const form = maintainForm.confirm(get().form);

  if (form.invalid) {
    set({ form });
    return;
  }

  set({ form, is: 'pending' });

  try {
    const get = useArticleMaintainStore.getState;
    const url = get().url;
    const isInCreation = !url;

    if (isInCreation) {
      await createArticle({
        ...form.values,
        thumbnail: form.values.thumbnail.file,
      });
    } else {
      await updateArticle({
        ...form.values,
        thumbnail: form.values.thumbnail.file,
        url,
      });
    }

    set({ is: isInCreation ? 'created' : 'edited' });
  } catch (error: unknown) {
    set({ is: 'error', error: getError(error) });
  }
};

const initialize: ArticleMaintainActions['initialize'] = async (lang, url) => {
  const set = useArticleMaintainStore.setState;

  if (!url) {
    set({
      is: 'creation',
      url: undefined,
      form: maintainForm.init({
        title: '',
        description: '',
        thumbnail: {
          file: null,
          preview: [],
        },
        content: '',
        lang,
      }),
    });
    return;
  }

  set({ is: 'loading', url });

  try {
    const { data } = await getArticle({ url, lang });

    set({
      is: 'edition',
      form: maintainForm.init({
        title: data.title,
        description: data.description,
        thumbnail: {
          file: null,
          preview: [data.thumbnailUrl],
        },
        content: data.content,
        lang: data.lang,
      }),
    });
  } catch (error: unknown) {
    set({ is: 'error', error: getError(error) });
  }
};

export { useArticleMaintainStore, initialize, confirm, change };
