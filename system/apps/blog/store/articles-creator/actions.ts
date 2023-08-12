import type { Lang, Url } from '@system/blog-api-models';
import { useArticlesCreatorStore } from './store';
import {
  createFail,
  created,
  creating,
  creation,
  editFail,
  edited,
  editing,
  edition,
  idle,
  loadFail,
  loading,
} from './states';
import {
  createArticle,
  getArticle,
  getError,
  updateArticle,
} from '@system/blog-api';
import { ArticlesCreator } from './defs';
import { creatorForm, initForm } from './form';

const validateConfirm = (
  state: ArticlesCreator.Creation | ArticlesCreator.Edition
): void | never => {
  const { form } = state;
  const { thumbnail } = form.values;

  if (form.invalid) throw Error('You tried to send invalid form data');

  if (!thumbnail.file) throw Error('File is required');
};

const store = () => ({
  setState: (state: ArticlesCreator.State) =>
    useArticlesCreatorStore.setState(state, true),
  getState: useArticlesCreatorStore.getState,
});

const { setState, getState } = store();

const articles_creator_actions = {
  reset: (): void => {
    setState(idle());
  },
  init: async (lang: Lang, url?: Url) => {
    if (url) {
      setState(loading(url));

      try {
        const { data: article } = await getArticle({ url, lang });
        const { title, description, content, thumbnailUrl } = article;

        setState(
          edition(
            url,
            initForm(lang, {
              title,
              description,
              thumbnail: {
                file: null,
                preview: thumbnailUrl,
              },
              content,
            }),
            article
          )
        );
      } catch (error: unknown) {
        setState(loadFail(getError(error)));
      }

      return;
    }

    setState(creation(initForm(lang)));
  },
  change: <
    K extends keyof ArticlesCreator.FormData,
    V extends ArticlesCreator.FormData[K]
  >(
    key: K,
    value: V
  ) => {
    const s = getState();

    if (s.is === 'creation') {
      setState(creation(creatorForm.set(s.form)({ [key]: value })));
      return;
    }

    if (s.is === 'edition') {
      setState(
        edition(s.url, creatorForm.set(s.form)({ [key]: value }), s.article)
      );
      return;
    }

    setState(
      loadFail(getError('The current state is not changeable: ' + s.is))
    );
  },
  confirm: async () => {
    const s = getState();

    if (s.is === 'creation') {
      const { form } = s;
      const { title, description, content, thumbnail, lang } = form.values;

      try {
        validateConfirm(s);

        setState(creating(form));

        await createArticle({
          title,
          description,
          content,
          lang,
          thumbnail: thumbnail.file,
        });

        setState(created(form));
      } catch (error: unknown) {
        setState(createFail(s.form, getError(error)));
      }
      return;
    }

    if (s.is === 'edition') {
      const { form, url, article } = s;
      const { title, description, content, thumbnail, lang } = form.values;

      try {
        validateConfirm(s);

        setState(editing(url, form, article));

        await updateArticle({
          url,
          title,
          description,
          content,
          lang,
          thumbnail: thumbnail.file,
        });

        setState(edited(url, form, article));
      } catch (error: unknown) {
        setState(editFail(url, form, getError(error), article));
      }
      return;
    }

    setState(
      loadFail(getError('The current state is not confirmable: ' + s.is))
    );
  },
};

export { articles_creator_actions };
