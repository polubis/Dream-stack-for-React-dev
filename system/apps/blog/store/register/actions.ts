import { getError, register } from '@system/blog-api';
import { type RegisterStore } from './defs';
import { useRegisterStore } from './store';
import { registerForm } from './core';

const { setState: set, getState: get } = useRegisterStore;

const register_store_actions: RegisterStore.Actions = {
  setField: (key, value) => {
    set({ form: registerForm.set(get().form)({ [key]: value }) });
  },
  submit: async () => {
    const form = registerForm.confirm(get().form);

    if (form.invalid) {
      set({ form });
      return;
    }

    set({ key: 'pending' });

    try {
      await register(useRegisterStore.getState().form.values);

      set({ key: 'ok' });
    } catch (error: unknown) {
      set({ key: 'error', error: getError(error) });
    }
  },
};

export { register_store_actions };
