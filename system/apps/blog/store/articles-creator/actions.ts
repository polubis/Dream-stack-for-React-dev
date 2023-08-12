import { useArticlesCreatorStore } from './store';

import { ArticlesCreator } from './defs';
import { creatorForm } from './form';

const setState = (state: ArticlesCreator.State) =>
  useArticlesCreatorStore.setState(state);
const getState = () => useArticlesCreatorStore.getState();

const articles_creator_actions = {
  setForm: async (form: ArticlesCreator.FormDataState) => {
    setState({ form });
  },
  change: <
    K extends keyof ArticlesCreator.FormData,
    V extends ArticlesCreator.FormData[K]
  >(
    key: K,
    value: V
  ) => {
    const { form } = getState();
    setState({ form: creatorForm.set(form)({ [key]: value }) });
  },
  confirm: () => {
    setState({ form: creatorForm.confirm(getState().form) });
  },
};

export { articles_creator_actions };
