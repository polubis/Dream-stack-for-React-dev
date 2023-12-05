import { form, maxLength, minLength, required } from '@system/utils';
import type { SignInStore } from './defs';

const signInForm = form<SignInStore.FormData>({ validateOnInit: true })({
  login: [required, minLength(6), maxLength(20)],
  password: [required, minLength(6), maxLength(20)],
});

export { signInForm };
