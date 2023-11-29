import { getError, signIn } from '@system/blog-api';
import { type SignInStore } from './defs';
import { useSignInStore } from './store';
import { auth_store_actions } from '../auth';

const { setState: set } = useSignInStore;

const sign_in_store_actions: SignInStore.Actions = {
  reset: () => {
    useSignInStore.setState({ is: 'idle' });
  },
  signIn: async (payload) => {
    set({ is: 'busy' });

    try {
      const { data } = await signIn(payload);

      auth_store_actions.authorize(data);

      set({ is: 'ok' });
    } catch (error: unknown) {
      set({ is: 'fail', error: getError(error) });
    }
  },
};

export { sign_in_store_actions };
