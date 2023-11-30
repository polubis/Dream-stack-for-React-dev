import { getError, signOut } from '@system/blog-api';
import { type SignOutStore } from './defs';
import { useSignOutStore } from './store';
import { auth_store_actions } from '../auth';
import { sign_in_store_actions } from '../sign-in';

const { setState } = useSignOutStore;

const set = (state: SignOutStore.State): void => {
  setState(state, true);
};

const sign_out_store_actions: SignOutStore.Actions = {
  signOut: async () => {
    set({ is: 'busy' });

    try {
      await signOut();

      auth_store_actions.unauthorize();
      sign_in_store_actions.reset();

      set({ is: 'ok' });
    } catch (error: unknown) {
      set({ is: 'fail', error: getError(error) });
    }
  },
};
export { sign_out_store_actions };
