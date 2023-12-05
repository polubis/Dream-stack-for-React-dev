import { create } from 'zustand';
import type { SignInStore } from './defs';
import { signInForm } from './core';

const useSignInStore = create<SignInStore.State>(() => ({
  is: 'idle',
  form: signInForm.init({ login: '', password: '' }),
}));

export { useSignInStore };
