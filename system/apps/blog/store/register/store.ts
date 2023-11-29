import { create } from 'zustand';
import { RegisterStore } from './defs';
import { registerForm } from './core';

const useRegisterStore = create<RegisterStore.State>(() => ({
  is: 'idle',
  error: null,
  form: registerForm.init({
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),
}));

export { useRegisterStore };
