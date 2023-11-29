import { create } from 'zustand';
import { RegisterStore } from './defs';
import { registerForm } from './core';

const useRegisterStore = create<RegisterStore.State>(() => ({
  key: 'idle',
  error: null,
  form: registerForm.init({
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),
}));

export { useRegisterStore };
