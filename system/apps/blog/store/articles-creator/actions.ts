import { useArticlesCreatorStore } from './store';
import type { ArticlesCreator } from './defs';
import { creatorForm } from './form';
import { createArticle, getError, updateArticle } from '@system/blog-api';
import { Url } from '@system/blog-api-models';

const articles_creator_actions = {
  setView: (view: ArticlesCreator.View): void => {
    useArticlesCreatorStore.setState({ view });
  },
  setForm: (values: Partial<ArticlesCreator.FormData> = {}): void => {
    useArticlesCreatorStore.setState({
      form: creatorForm.init({
        ...useArticlesCreatorStore.getState().form.values,
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
    const { form } = useArticlesCreatorStore.getState();
    useArticlesCreatorStore.setState({
      form: creatorForm.set(form)({ [key]: value }),
    });
  },
  confirm: async (url?: Url): Promise<void> => {
    useArticlesCreatorStore.setState({
      is: 'busy',
      form: creatorForm.confirm(useArticlesCreatorStore.getState().form),
    });

    try {
      const {
        form: {
          values: { title, thumbnail, description, content, lang },
        },
      } = useArticlesCreatorStore.getState();

      const payload = {
        title,
        thumbnail: thumbnail.file,
        description,
        content,
        lang,
      };

      url
        ? await updateArticle({ url, ...payload })
        : await createArticle(payload);

      useArticlesCreatorStore.setState({ is: 'ok' });
    } catch (error: unknown) {
      useArticlesCreatorStore.setState({ is: 'fail', error: getError(error) });
    }
  },
};

export { articles_creator_actions };
