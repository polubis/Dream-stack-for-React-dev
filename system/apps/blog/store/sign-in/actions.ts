import { getError, signIn } from '@system/blog-api';
import { type SignInStore } from './defs';
import { useSignInStore } from './store';
import { auth_store_actions } from '../auth';
import { signInForm } from './core';

const { setState: set, getState: get } = useSignInStore;

const sign_in_store_actions: SignInStore.Actions = {
  reset: () => {
    set({
      is: 'idle',
      form: signInForm.init({ login: '', password: '' }),
    });
  },
  setField: (key, value) => {
    set({ form: signInForm.set(get().form)({ [key]: value }) });
  },
  submit: async () => {
    set({ is: 'busy' });

    try {
      const { data } = await signIn(get().form.values);

      auth_store_actions.authorize(data);

      set({ is: 'ok' });
    } catch (err: unknown) {
      const error = getError(err);
      set({ is: 'fail', error });
    }
  },
};

export { sign_in_store_actions };
