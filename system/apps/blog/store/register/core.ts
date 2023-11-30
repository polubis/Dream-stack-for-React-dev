import { form, maxLength, minLength, required } from '@system/utils';
import type { RegisterStore } from './defs';

const registerForm = form<RegisterStore.FormData>()({
  login: [required, minLength(6), maxLength(20)],
  email: [required],
  password: [required, minLength(6), maxLength(20)],
  confirmPassword: [required, minLength(6), maxLength(20)],
});

export { registerForm };
