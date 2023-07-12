import { create } from 'zustand';
import type { RegisterStore } from './defs';
import { register, getError } from '@system/blog-api';
import { form, maxLength, minLength, required } from '@system/utils';
import type { RegisterPayload } from '@system/blog-api-models';

const registerForm = form<RegisterPayload>()({
  login: [required, minLength(6), maxLength(20)],
  email: [required],
  password: [required, minLength(6), maxLength(20)],
  confirmPassword: [required, minLength(6), maxLength(20)],
});

const useRegisterStore = create<RegisterStore>((set, get) => ({
  key: 'idle',
  error: null,
  form: registerForm.init({
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),
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
}));

export { useRegisterStore, registerForm };
